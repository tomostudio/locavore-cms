import React from "react";

// Important items to allow form fields to work properly and patch the dataset.
import { PatchEvent, set } from "part:@sanity/form-builder/patch-event";
import FormField from "part:@sanity/components/formfields/default";

// Import the TextArea from UI
import { TextArea } from "@sanity/ui";

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
        style={{ height: "60px" }}
      />
    </FormField>
  );
});

export default {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      title: "SEO",
      description:
        "Search Engine Optimization allows to improve the ranking in search results.",
      name: "seo",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "seo_description",
          description:
            "Enter up to 400 characters to describe the Homepage. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).",
          type: "string",
          title: "Description",
        },
        {
          name: "seo_keywords",
          description:
            "Enter some keywords to describe the Homepage (separated by commas)",
          type: "string",
          title: "Keywords",
        },
        {
          name: "seo_image",
          title: "Image",
          description:
            "800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)",
          type: "image",
          fields: [
            {
              title: "Edit Alt Text",
              name: "alt",
              type: "string",
              initialValue: "Locavore NXT",
            },
          ],
        },
      ],
    },
    {
      title: "Hero",
      name: "hero",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "object",
          fields: [
            {
              name: "imageDesktop",
              title: "Image Desktop",
              type: "image",
              fields: [
                {
                  title: "Edit Alt Text",
                  name: "alt",
                  type: "string",
                  initialValue: "Locavore NXT",
                },
              ],
            },
            {
              name: "imageMobile",
              title: "Image Mobile",
              type: "image",
              fields: [
                {
                  title: "Edit Alt Text",
                  name: "alt",
                  type: "string",
                  initialValue: "Locavore NXT",
                },
              ],
            },
          ],
        },
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "string",
        },
      ],
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "article",
      type: "menuComponent",
      title: "Article Module",
      description: "You may add multiple module to be included in this article",    },
  ],
  preview: {
    prepare() {
      return {
        title: "Home NXT",
      };
    },
  },
};
