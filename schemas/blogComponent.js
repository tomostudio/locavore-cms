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
          validation: (Rule) =>
            Rule.custom((field, context) => {
              if (
                context.document.blog
                  .filter((item) => item._type === 'orange')
                  .filter(
                    (data) =>
                      data.title
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[-]+/g, '-')
                        .replace(/[^\w-]+/g, '') ===
                      field
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[-]+/g, '-')
                        .replace(/[^\w-]+/g, ''),
                  ).length > 1
              ) {
                return 'Title must be unique'
              } else {
                return true
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
          validation: (Rule) =>
            Rule.custom((field, context) => {
              if (
                context.document.blog
                  .filter((item) => item._type === 'white')
                  .filter(
                    (data) =>
                      data.title.split(' ').join('-') ===
                      field.split(' ').join('-'),
                  ).length > 1
              ) {
                return 'Title must be unique'
              } else {
                return true
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
          name: 'image',
          type: 'image',
        },
        {
          title: 'Small / Full',
          name: 'option',
          type: 'boolean',
          initialValue: false,
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
  ],
}
