export default {
    name: 'family',
    title: 'Family',
    type: 'document',
    fields: [
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
              description: 'Enter up to 400 characters to describe the Family Landing page',
              type: "string",
              title: "Description",
            },
            {
              name: "seo_keywords",
              description: 'Enter some keywords to describe the Family Landing page (separated by commas)',
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
          title: "Family"
        }
      }
    }
  }
    