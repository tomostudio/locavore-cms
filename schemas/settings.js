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
      description: 'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          description: 'Enter up to 400 characters to describe this website',
          type: 'string',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'seo_keywords',
          description: 'Enter some keywords to describe this website (separated by commas)',
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
              initialValue: "Locavore NXT"
            },
          ],
        },
      ],
    },
    {
      name: "share",
      title: "Share",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "message",
          title: "Message",
          type: "string",
          validation: (Rule) => Rule.required(),
        }
      ]
    },
    {
      name: 'googleID',
      description: 'Place your Google Analytics ID here to link to your Google Analytics to see the website traffic statistic',
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
      description: 'Place your Mailchimp URL here to receive incoming emails from this website',
      title: 'Mailchimp Embed URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
