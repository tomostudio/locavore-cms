export default {
  name: 'settings',
  title: 'Settings',
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
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
      title: 'Header Link',
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
      title: 'Social Media Footer',
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
}
