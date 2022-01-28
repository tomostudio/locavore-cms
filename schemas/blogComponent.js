export default {
  name: 'blogComponent',
  title: 'Blog Component',
  type: 'array',
  of: [
    {
      name: 'orange',
      title: 'Edit Content to Color Frame',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: (doc, options) => options.parent.title,
            maxLength: 96,
          },
          validation: (Rule) =>
            Rule.custom((slug, context) => {
              const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
              if(slug) {
                if (slug.current.match(regex) !== null) {
                  if (context.document.blog.filter((item) => item.slug && item.slug.current === slug.current).length > 1) {
                    return 'Slug is already in use'
                  }else {
                    return true
                  }
                } else {
                  return 'Not a valid slug'
                }
              }else {
                return 'Required'
              }
            }),
        },
        {
          title: 'Color',
          name: 'color',
          type: 'color',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'blockOrange',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Color',
          }
        },
      },
    },
    {
      name: 'video',
      type: 'videoComponent',
      title: 'Video',
    },
    {
      name: 'gallery',
      type: 'galleryComponent',
      title: 'Gallery',
    },
    {
      name: 'white',
      title: 'Content with White Frame',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: (doc, options) => options.parent.title,
            maxLength: 96,
          },
          validation: (Rule) =>
            Rule.custom((slug, context) => {
              const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
              if(slug) {
                if (slug.current.match(regex) !== null) {
                  if (context.document.blog.filter((item) => item.slug && item.slug.current === slug.current).length > 1) {
                    return 'Slug is already in use'
                  }else {
                    return true
                  }
                } else {
                  return 'Not a valid slug'
                }
              }else {
                return 'Required'
              }
            }),
        },
        {
          name: 'content',
          title: 'Content',
          type: 'blockWhite',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'White',
          }
        },
      },
    },
    {
      name: 'images',
      title: 'Image',
      type: 'object',
      fields: [
        {
          name: "image",
          type: 'image',
        },
        {
          title: "Small / Full",
          name: "option",
          type: "boolean",
        }
      ],
      preview: {
        prepare() {
          return {
            title: 'Image',
          }
        },
      },
    },
  ],
}
