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
  name: "homeNxt",
  title: "Home NXT",
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
      name: "section1",
      title: "First Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: "Image",
          name: "image",
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
          title: "Description",
          name: "description",
          type: "string",
          inputComponent: inputWithHeight,
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Text Left",
          name: "textLeft",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Text Right",
          name: "textRight",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "section2",
      title: "Menu Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: "Image Wide (Option 1)",
          name: "imageWide",
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
          title: "Image Normal (Option 2 & 3)",
          name: "imageNormal",
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
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Description",
          name: "description",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "option",
          title: "Option",
          type: "string",
          options: {
            list: [
              { title: "Option 1", value: "option1" },
              { title: "Option 2", value: "option2" },
              { title: "Option 3", value: "option3" },
            ],
            layout: "radio",
          },
          validation: (Rule) => Rule.required(),
          initialValue: "option1",
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Home NXT",
      };
    },
  },
};
