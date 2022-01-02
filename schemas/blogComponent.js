export default {
  name: 'blogComponent',
  title: 'Blog Component',
  type: 'array',
  of: [
    {
      name: 'orange',
      title: 'Content with Orange Frame',
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
          type: 'blockOrange',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Orange',
          }
        },
      },
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
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Image',
          }
        },
      },
    },
    {
      name: 'imageFull',
      title: 'Image Full',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Image Full',
          }
        },
      },
    },
  ],
}
