export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      title: 'Issue',
      name: 'issue',
      type: 'reference',
      to: [{ type: 'issue' }],
    },
    {
      title: "SEO",
      name: "seo",
      type: "object",
      options: {
        collapsible: true
      },
      fields: [
        {
          name: "seo_description",
          type: "string",
          title: "Description",
        },
        {
          name: "seo_keywords",
          type: "string",
          title: "Keywords",
        },
        {
          name: "seo_image",
          title: "Image",
          description: "800 x 600 | PNG / JPEG / WEBP | max 100kb",
          type: "image",
          fields: [
            {
              title: "Edit Alt Text",
              name: "name",
              type: "string",
              initialValue: "Locavore NXT"
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
}
