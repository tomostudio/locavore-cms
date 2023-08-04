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
        style={{ height: "120px" }}
      />
    </FormField>
  );
});

export default {
  name: "visit",
  title: "Visit",
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
            "Enter up to 400 characters to describe the Visit. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).",
          type: "string",
          title: "Description",
        },
        {
          name: "seo_keywords",
          description:
            "Enter some keywords to describe the Visit (separated by commas)",
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
      title: "Hero Image",
      name: "hero",
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
      title: "Heading on Hero Image",
      name: "heading",
      type: "string",
    },
    {
      title: "Sub-heading Top",
      name: "subheadingTop",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "blockCenter",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Call to Action Button",
      name: "ctaButton",
      type: "object",
      fields: [
        {
          title: "Button Text",
          name: "buttonText",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Button Link",
          name: "link",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: "Location",
      name: "location",
      type: "object",
      description: "Input complete address of the new Locavore",
      fields: [
        {
          title: "Entry",
          name: "entry",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Map Image",
          name: "mapImage",
          type: "object",
          fields: [
            {
              name: "imageDesktop",
              title: "Image Desktop",
              type: "image",
              description: "Image Size: 750 x 500 px",
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
              description: "Image Size: 320 x 230 px",
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
          title: "Link",
          name: "link",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: "Additional Information",
      name: "additionalInfo",
      type: "array",
      of: [
        {
          title: "Content",
          name: "content",
          type: "object",
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
              type: "blockVisitContent",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: "Sub-heading Bottom",
      name: "subheadingBottom",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Visit",
      };
    },
  },
};
