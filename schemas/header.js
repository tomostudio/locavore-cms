export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'object',
      fields: [
        {
          name: 'white',
          description: 'PNG / WEBP',
          title: 'White',
          type: 'image',
          validation: (Rule) =>
            Rule.custom((field, _) => {
              return field?.asset ? true : "Required";
            }),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
              initialValue: 'Locavore NXT',
            },
          ],
        },
        {
          name: 'black',
          description: 'PNG / WEBP',
          title: 'Black',
          type: 'image',
          validation: (Rule) =>
            Rule.custom((field, _) => {
              return field?.asset ? true : "Required";
            }),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
              initialValue: 'Locavore NXT',
            },
          ],
        },
      ],
    },
    {
      title: 'Header Options',
      description: 'Items listed here will be displayed on the website header',
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
