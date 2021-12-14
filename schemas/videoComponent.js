export default {
  name: 'videoComponent',
  title: 'Video Component',
  type: 'object',
  fields: [
    {
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Dark',
      name: 'dark',
      type: 'boolean',
      initialValue: false
    },
  ],
}
