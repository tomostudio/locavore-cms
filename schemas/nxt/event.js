export default {
  name: "event",
  title: "Our Events & Programs (List)",
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
              name: "name",
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
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "imageDesktop",
          title: "Image Desktop",
          type: "image",
          description: "Hero Image Size: 1440 x 350 px",
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
          description: "Hero Image Size: 375 x 350 px",
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
      name: "heading",
      title: "Heading on Hero Image",
      type: "string",
      description: "Will also be used on Browser Tab Title",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Our Events & Programs (List)",
      };
    },
  },
};
