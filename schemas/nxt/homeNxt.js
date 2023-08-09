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
  title: "Home",
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
            "Enter up to 400 characters to describe the Home. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).",
          type: "string",
          title: "Description",
        },
        {
          name: "seo_keywords",
          description:
            "Enter some keywords to describe the Home (separated by commas)",
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
      title: "Landing Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "imageDesktop",
          title: "Image Desktop",
          type: "image",
          description: "Input Desktop Homepage Hero Image: 1440 x 900 px",
          validation: (Rule) => Rule.required(),
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
          description: "Input Mobile Homepage Hero Image: 375 x 870 px",
          validation: (Rule) => Rule.required(),
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
          title: "Description",
          name: "description",
          type: "string",
          description:
            "Short description about the new Locavore (1-2 sentences or 15-20 words)",
          inputComponent: inputWithHeight,
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Text Left",
          name: "textLeft",
          type: "string",
          description: "Input keywords (max 2 words)",
        },
        {
          title: "Text Right",
          name: "textRight",
          type: "string",
          description: "Input keywords (max 2 words)",
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
          name: "option",
          title: "Layout Options",
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
        {
          title: "Image Set (For Option 1)",
          name: "imageOption1",
          type: "object",
          hidden: ({ parent }) => !(parent?.option === "option1"),
          fields: [
            {
              title: "Image Desktop",
              name: "imageDesktop",
              type: "image",
              description:
                "Desktop Homepage Menu Image Layout Option 1: 1440 x 900 px",
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
              title: "Image Mobile",
              name: "imageMobile",
              type: "image",
              description:
                "Mobile Homepage Menu Image Layout Option 1: 375 x 872 px",
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
          title: "Image (For Option 2)",
          name: "imageOption2",
          type: "image",
          hidden: ({ parent }) => !(parent?.option === "option2"),
          description:
            "Desktop Homepage Menu Image Layout Option 2: 800 x 435 px",
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
          title: "Image Set (For Option 3)",
          name: "imageOption3",
          type: "object",
          hidden: ({ parent }) => !(parent?.option === "option3"),
          fields: [
            {
              title: "Image Left",
              name: "imageLeft",
              type: "image",
              description:
                "Desktop Homepage Menu Image Layout Option 2: 384 x 210 px",
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
              title: "Image Right",
              name: "imageRight",
              type: "image",
              description:
                "Desktop Homepage Menu Image Layout Option 2: 384 x 210 px",
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
          title: "Heading",
          name: "heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Menu Title",
          name: "menuTitle",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Button Text",
          name: "button",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "facilitiesSection",
      title: "Our Facilities Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: "Heading",
          name: "heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Button Text",
          name: "button",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "collaboratorSection",
      title: "Our Collaborators Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: "Heading",
          name: "heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Button Text",
          name: "button",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "eventSection",
      title: "Our Events & Programs Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          title: "Heading",
          name: "heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Button Text",
          name: "button",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Home",
      };
    },
  },
};
