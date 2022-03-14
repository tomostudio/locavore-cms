export default {
  name: 'videoComponent',
  title: 'Video Component',
  type: 'object',
  fields: [
    {
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
          initialValue: "Locavore NXT"
        },
      ],
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (context.document.layout === 'video' || context.document.layout === 'blog') {
            return !field ? 'Required' : true
          } else {
            return true
          }
        }),
    },
    {
      title: 'White / Black Button',
      name: 'dark',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      media: 'thumbnail',
    },
    prepare(selection) {
      const { media } = selection
      return {
        title: 'Video Module',
        media: media,
      }
    },
  },
}
