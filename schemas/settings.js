export default {
  name: 'settings',
  title: 'General',
  type: 'document',
  initialValue: () => ({
    webTitle: 'Locavore',
  }),
  fields: [
    {
      name: 'webTitle',
      title: 'Website Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          type: 'string',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'seo_keywords',
          type: 'string',
          title: 'Keywords',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'seo_image',
          title: 'Image',
          description: '800 x 600 | PNG / JPEG / WEBP | max 100kb',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "Share",
      title: "Share",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "message",
          title: "Message",
          type: "string",
        }
      ]
    },
    {
      name: 'googleID',
      title: 'Google Analytics ID',
      type: 'string',
    },
    {
      name: 'facebookID',
      title: 'Facebook Pixel ID',
      type: 'string',
    },
    {
      name: 'mailchimpID',
      title: 'Mailchimp ID',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General',
      }
    },
  },
}
