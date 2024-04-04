export default {
    name: "homeShop",
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
              "Enter up to 400 characters to describe this website. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).",
            type: "string",
            title: "Description",
          },
          {
            name: "seo_keywords",
            description:
              "Enter some keywords to describe this website (separated by commas)",
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
        title: "Product Highlight",
        name: "productHighlight",
        type: "array",
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
      prepare() {
        return {
          title: "Home",
        };
      },
    },
  };
  