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
          title: "Option",
          name: "option",
          type: "string",
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              { title: "Option 1", value: "option-1" },
              { title: "Option 2", value: "option-2" },
              { title: "Option 3", value: "option-3" },
            ],
            layout: "radio",
          },
        },
        {
          title: "Close Button Color",
          name: "closeColor",
          type: "string",
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              { title: "Black", value: "black" },
              { title: "White", value: "white" },
            ],
            layout: "radio",
          },
        },
        {
          title: "Option 1",
          name: "option1",
          type: "object",
          hidden: ({ parent }) =>
            parent?.option === "option-2" || parent?.option === "option-3",
          validation: (Rule) =>
            Rule.custom((field, context) =>
              context.parent.option === "option-1" && !field ? "Option 1 Required" : true
            ),
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
              validation: (Rule) =>
                Rule.custom((field, context) =>
                  context.document.popup.option === "option-1" && !field
                    ? "Required"
                    : true
                ),
            },
            {
              title: "Description",
              name: "description",
              type: "blockBanner",
              validation: (Rule) =>
                Rule.custom((field, context) =>
                  context.document.popup.option === "option-1" && !field
                    ? "Required"
                    : true
                ),
            },
            {
              title: "CTA Button",
              name: "ctaButton",
              type: "object",
              fields: [
                {
                  title: "Name",
                  name: "name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  title: "Link",
                  name: "link",
                  type: "url",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
        {
          title: "Option 2",
          name: "option2",
          type: "object",
          hidden: ({ parent }) =>
            parent?.option === "option-1" || parent?.option === "option-3",
          validation: (Rule) =>
            Rule.custom((field, context) =>
              context.parent.option === "option-2" && !field ? "Option 2 Required" : true
            ),
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
              validation: (Rule) =>
                Rule.custom((field, context) =>
                  context.document.popup.option === "option-2" && !field
                    ? "Required"
                    : true
                ),
            },
            {
              title: "Image Desktop",
              name: "imageDesktop",
              type: "image",
              validation: (Rule) =>
                Rule.custom((field, _) => {
                  return field?.asset ? true : "Required";
                }),
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
              title: "Image Mobile",
              name: "imageMobile",
              type: "image",
              validation: (Rule) =>
                Rule.custom((field, _) => {
                  return field?.asset ? true : "Required";
                }),
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
              title: "Description",
              name: "description",
              type: "blockBanner",
              validation: (Rule) =>
                Rule.custom((field, context) =>
                  context.document.popup.option === "option-2" && !field
                    ? "Required"
                    : true
                ),
            },
            {
              title: "CTA Button",
              name: "ctaButton",
              type: "object",
              fields: [
                {
                  title: "Name",
                  name: "name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  title: "Link",
                  name: "link",
                  type: "url",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
        {
          title: "Option 3",
          name: "option3",
          type: "object",
          hidden: ({ parent }) =>
            parent?.option === "option-1" || parent?.option === "option-2",
          validation: (Rule) =>
            Rule.custom((field, context) =>
              context.parent.option === "option-3" && !field ? "Option 3 Required" : true
            ),
          fields: [
            {
              title: "Image Desktop",
              name: "imageDesktop",
              type: "image",
              validation: (Rule) =>
                Rule.custom((field, _) => {
                  return field?.asset ? true : "Required";
                }),
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
              title: "Image Mobile",
              name: "imageMobile",
              type: "image",
              validation: (Rule) =>
                Rule.custom((field, _) => {
                  return field?.asset ? true : "Required";
                }),
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
      ],
    },
    {
      title: "Notification Text",
      name: "notificationText",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: "Add to Cart",
          name: "addToCart",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Delete Product",
          name: "deleteProduct",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Product Change on Cart",
          name: "productChange",
          type: "string",
          validation: (Rule) => Rule.required(),
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: "General",
      };
    },
  },
};
