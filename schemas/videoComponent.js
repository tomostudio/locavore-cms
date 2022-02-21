export default {
  name: 'videoComponent',
  title: 'Video Component',
  type: 'object',
  fields: [
    {
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      validation: (Rule) => Rule.custom((field, context) => {
        if(context.document.layout === 'video') {
          return !field ? "Required" : true
        }else {
          return true
        }
      }),
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
      validation: (Rule) => Rule.custom((field, context) => {
        if(context.document.layout === 'video') {
          return !field ? "Required" : true
        }else {
          return true
        }
      }),
    },
    {
      title: 'Dark',
      name: 'dark',
      type: 'boolean',
      initialValue: false
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Video Module"
      }
    }
  }
}
