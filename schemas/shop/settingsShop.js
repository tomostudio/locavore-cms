export default {
  name: "settingsShop",
  title: "General",
  type: "document",
  initialValue: () => ({
    webTitle: "Locavore",
  }),
  fields: [
    {
      name: "webTitle",
      title: "Website Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
            "Enter up to 400 characters to describe this website. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).",
          type: "string",
          title: "Description",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "seo_keywords",
          description:
            "Enter some keywords to describe this website (separated by commas)",
          type: "string",
          title: "Keywords",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "seo_image",
          title: "Image",
          description:
            "800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)",
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
      title: "PopUp",
      name: "popup",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "image",
          title: "Image",
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
        {
          title: "Text Top",
          name: "textTop",
          type: "string"
        },
        {
          title: "Text Bottom",
          name: "textBottom",
          type: "string"
        },
        {
          title: "Description",
          name: "description",
          type: "string",
          validation: (Rule) => Rule.required().custom((field, context) => {
            console.log(field)
            return true;
          }),
        },
        {
          title: "Option",
          name: "option",
          type: "string",
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              { title: "Option 1", value: "option-1" },
              { title: "Option 2", value: "option-2" },
            ], // <-- predefined values
            layout: "radio", // <-- defaults to 'dropdown'
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "General",
      };
    },
  },
};
