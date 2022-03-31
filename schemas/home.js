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
      description: 'Search Engine Optimization allows to improve the ranking in search results.',
      name: "seo",
      type: "object",
      options: {
        collapsible: true
      },
      fields: [
        {
          name: "seo_description",
          description: 'Enter up to 400 characters to describe the Homepage',
          type: "string",
          title: "Description",
        },
        {
          name: "seo_keywords",
          description: 'Enter some keywords to describe the Homepage (separated by commas)',
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
