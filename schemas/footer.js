export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      title: 'Social Media',
      name: 'footerLink',
      type: 'object',
      fields: [
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'object',
          fields: [
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
        },
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'object',
          fields: [
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
        },
        {
          title: 'Youtube',
          name: 'youtube',
          type: 'object',
          fields: [
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
        },
        {
          title: 'Linkedin',
          name: 'linkedin',
          type: 'object',
          fields: [
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: "email",
      title: "Email",
      type: "email"
    },
    {
      name: 'creditText',
      title: 'Credits Text',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
}
