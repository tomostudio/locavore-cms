export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      title: 'Show Social Media',
      name: 'show_socmed',
      type: 'boolean',
      initialValue: true,
    },
    {
      title: 'Social Media',
      name: 'footerLink',
      type: 'object',
      hidden: ({ parent }) => !(parent?.show_socmed === true),
      fields: [
        {
          name: "email",
          title: "Email",
          type: "email"
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'url',
        },
        {
          title: 'Facebook',
          name: 'facebook',
          type: 'url',
        },
        {
          title: 'Youtube',
          name: 'youtube',
          type: 'url',
        },
        {
          title: 'Linkedin',
          name: 'linkedin',
          type: 'url',
        },
      ],
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
