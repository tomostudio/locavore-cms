export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Header Options',
      name: 'headerLink',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'Booking',
      name: 'booking',
      type: 'url',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    },
  },
}
