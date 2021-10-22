export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'content',
          title: 'Content',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Link',
              name: 'link',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Social',
      }
    },
  },
}
