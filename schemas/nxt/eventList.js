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
  name: "eventList",
  title: "Our Events & Programs (Database)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Event Title",
      type: "string",
      description: "Will also be used on Browser Tab Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/;
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
            "Enter up to 400 characters to describe the Event. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).",
          type: "string",
          title: "Description",
        },
        {
          name: "seo_keywords",
          description:
            "Enter some keywords to describe the Event (separated by commas)",
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
      name: "thumbnail",
      title: "Thumbnail",
      type: "object",
      fields: [
        {
          name: "imageColor",
          title: "Image Color",
          type: "image",
          description: "Image Size: 280 x 280 px",
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
          name: "imageBnw",
          title: "Image Black & White",
          type: "image",
          description: "Image Size: 280 x 280 px",
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
          title: "Short Description",
          name: "shortDescription",
          type: "string",
          description:
            "Input short description about the event/program (1-2 sentence or 12-15 words max)",
          inputComponent: inputWithHeight,
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: "Image",
      name: "image",
      type: "object",
      fields: [
        {
          name: "imageDesktop",
          title: "Image Desktop",
          type: "image",
          description: "Image Size: 1200 x 450 px",
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
          description: "Image Size: 345 x 422 px",
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
      ],
    },
    {
      title: "Content",
      name: "content",
      type: "blockCoverNxt",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Side Bar Information",
      name: "sidebar",
      type: "object",
      fields: [
        {
          title: "Venue",
          name: "venue",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Date",
          name: "date",
          type: "date",
          options: {
            dateFormat: "YYYY-MM-DD",
            calendarTodayLabel: "Today",
          },
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Location",
          name: "location",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Time",
          name: "time",
          type: "string",
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
              name: "buttonLink",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnail.imageColor",
    },
  },
};
