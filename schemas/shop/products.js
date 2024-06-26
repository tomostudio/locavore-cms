import { SunIcon, ImageIcon } from "@sanity/icons";
import React, { forwardRef, useState } from "react";

// Important items to allow form fields to work properly and patch the dataset.
import { PatchEvent, set } from "part:@sanity/form-builder/patch-event";
import FormField from "part:@sanity/components/formfields/default";

// Import the TextArea from UI
import { TextArea } from "@sanity/ui";
import { FiImage } from "react-icons/fi";

const inputWithHeight = React.forwardRef((props, ref) => {
  const { type, onChange } = props;
  return (
    <FormField label={type.title} description={type.description}>
      <TextArea
        ref={ref}
        placeholder={type.placeholder}
        value={props.value}
        onChange={(event) => {
          onChange(PatchEvent.from(set(event.target.value)));
        }}
        style={{ height: "300px" }}
      />
    </FormField>
  );
});

export default {
  name: "shopifyProducts",
  title: "Product List",
  type: "document",
  __experimental_actions: ["update", "publish"], // disable for initial publish
  fieldsets: [
    {
      title: "Status",
      name: "status",
    },
  ],
  fields: [
    {
      name: "shopifyProduct",
      title: "Shopify",
      type: "object",
      options: {
        collapsed: false,
        collapsible: true,
      },
      readOnly: true,
      fieldsets: [
        {
          name: "status",
          title: "Status",
          options: {
            columns: 2,
          },
        },
        {
          name: "organization",
          title: "Organization",
          options: {
            columns: 2,
          },
        },
      ],
      fields: [
        // Created at
        {
          fieldset: "status",
          name: "createdAt",
          title: "Created at",
          type: "string",
        },
        // Updated at
        {
          fieldset: "status",
          name: "updatedAt",
          title: "Last updated at",
          type: "string",
        },
        // Product status
        {
          fieldset: "status",
          name: "status",
          title: "Product status",
          type: "string",
          options: {
            layout: "dropdown",
            list: ["active", "archived", "draft"],
          },
        },
        // Title
        {
          name: "title",
          title: "Title",
          type: "string",
          description: "Title displayed in both cart and checkout",
        },
        // Product ID
        {
          name: "id",
          title: "ID",
          type: "string",
          description: "Shopify Product ID",
        },
        // Product Type
        {
          fieldset: "organization",
          name: "productType",
          title: "Product type",
          type: "string",
        },
        // Vendor
        {
          fieldset: "organization",
          name: "vendor",
          title: "Vendor",
          type: "string",
        },
        // Price range
        {
          name: "priceRange",
          title: "Price range",
          type: "object",
          options: {
            columns: 2,
          },
          fields: [
            {
              name: "minVariantPrice",
              title: "Min variant price",
              type: "number",
            },
            {
              name: "maxVariantPrice",
              title: "Max variant price",
              type: "number",
            },
          ],
        },
        // Options
        {
          name: "options",
          title: "Options",
          type: "array",
          of: [
            {
              title: "Product option",
              name: "productOption",
              type: "object",
              icon: SunIcon,
              readOnly: true,
              fields: [
                // Name
                {
                  title: "Name",
                  name: "name",
                  type: "string",
                },
                // Values
                {
                  title: "Values",
                  name: "values",
                  type: "array",
                  of: [
                    {
                      Title: "Name",
                      name: "name",
                      type: "object",
                      fields: [
                        {
                          name: "name",
                          type: "string",
                        },
                      ],
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  name: "name",
                },
                prepare(selection) {
                  const { name } = selection;

                  return {
                    title: name,
                  };
                },
              },
            },
          ],
        },
        {
          name: "images",
          title: "Images",
          type: "array",
          options: {
            layout: "grid",
          },
          of: [
            {
              title: "Image",
              name: "img",
              type: "object",
              readOnly: true,
              fields: [
                {
                  title: "Source",
                  name: "src",
                  type: "string",
                },
              ],
              preview: {
                select: {
                  media: "src",
                },
                prepare({ media }) {
                  return {
                    media: media ? (
                      <div
                        style={{
                          alignItems: "center",
                          borderRadius: "inherit",
                          display: "flex",
                          height: "100%",
                          justifyContent: "center",
                          overflow: "hidden",
                          width: "100%",
                        }}
                      >
                        <img
                          src={`${media}&width=400`}
                          style={{
                            height: "100%",
                            left: 0,
                            objectFit: "cover",
                            position: "absolute",
                            top: 0,
                            width: "100%",
                          }}
                          alt={`Image preview`}
                        />
                      </div>
                    ) : (
                      <FiImage />
                    ),
                  };
                },
              },
            },
          ],
        },
        // Variants
        {
          name: "variants",
          title: "Variants",
          type: "array",
          of: [
            {
              title: "Product Variants",
              name: "productVariants",
              type: "object",
              readOnly: true,
              fields: [
                {
                  title: "Variant ID",
                  name: "id",
                  type: "string",
                },
                {
                  title: "Title",
                  name: "title",
                  type: "string",
                },
                {
                  title: "Price",
                  name: "price",
                  type: "number",
                },
                {
                  title: "Quantity",
                  name: "inventoryQuantity",
                  type: "number",
                },
              ],
              preview: {
                select: {
                  title: "title",
                },
                prepare(selection) {
                  const { title } = selection;

                  return {
                    title: title,
                  };
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: "shopifyProduct.title",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9])){2,}$/i;
          if (slug) {
            if (slug.current.match(regex) !== null) {
              return true;
            } else {
              return "Not a valid slug";
            }
          } else {
            return "Required";
          }
        }),
    },
    {
      title: 'SEO',
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo',
      type: 'object',
      fields: [
        {
          name: 'seo_description',
          description:
            'Enter up to 400 characters to describe this website. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description:
            'Enter some keywords to describe this website (separated by commas)',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description:
            '1200 x 628 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
          type: 'image',
          fields: [
            {
              title: 'Alt Text',
              name: 'alt',
              type: 'string',
              initialValue: 'Locavore Shop',
            },
          ],
        },
      ],
    },
    {
      name: "thumbnail",
      description: "A cover image for this product | PNG / JPEG / WEBP",
      title: "Thumbnail",
      type: "image",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: "Edit Alt Text",
          name: "name",
          type: "string",
          initialValue: "Locavore NXT",
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: "Image",
          name: "image",
          type: "image",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: "Edit Alt Text",
              name: "name",
              type: "string",
              initialValue: "Locavore NXT",
            },
          ],
        },
      ],
    },
    {
      title: "Description",
      name: "description",
      type: "blockShop",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Dropdown",
      name: "dropdown",
      type: "array",
      of: [
        {
          title: "Content",
          name: "content",
          type: "object",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Description",
              name: "description",
              type: "string",
              inputComponent: inputWithHeight,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: "Similar Products",
      name: "similarProducts",
      type: "array",
      validation: (Rule) => Rule.max(4),
      of: [
        {
          title: "Product",
          name: "product",
          type: 'reference',
          to: [{ type: 'shopifyProducts' }],
          validation: (Rule) => Rule.required(),
        }
      ]
    }
  ],

  preview: {
    select: {
      title: "shopifyProduct.title",
      media: "thumbnail",
    },
    prepare(selection) {
      const { title, media } = selection;

      return {
        title: title,
        media: media
      };
    },
  },
};
