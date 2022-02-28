export default {
  name: 'blogComponent',
  title: 'Blog Component',
  type: 'array',
  of: [
    {
      name: 'editor',
      title: 'Editor Frame Module',
      type: 'object',
      fields: [
        {
          name: 'showTitle',
          title: 'Show Title',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'border',
          title: 'Border',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) =>
            Rule.required().custom((field, context) => {
              if (field) {
                if (
                  context.document.blog
                    .filter((item) => item._type === 'editor')
                    .filter(
                      (data) =>
                        data.title &&
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
              } else {
                return true
              }
            }),
        },
        {
          title: 'Customize Editor Color',
          name: 'color',
          type: 'color',
          hidden: ({ parent }) => !(parent?.border === true),
        },
        {
          name: 'content',
          title: 'Content',
          type: 'blockArticle',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Editor Frame',
          }
        },
      },
    },
    {
      name: 'video',
      type: 'videoComponent',
      title: 'Video Module',
    },
    {
      name: 'imageComponent',
      title: 'Image Module',
      type: 'object',
      fields: [
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
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
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
            title: 'Image Module',
          }
        },
      },
    },
    {
      name: 'gallery',
      title: 'Gallery Module',
      type: 'object',
      fields: [
        {
          name: 'gallery',
          title: 'Gallery Component',
          type: 'array',
          of: [
            {
              name: 'twoImage',
              title: 'Two Image',
              type: 'object',
              fields: [
                {
                  name: 'firstImage',
                  title: 'First Image',
                  type: 'image',
                  validation: (Rule) => Rule.required(),
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
                        title: 'First Image',
                      }
                    },
                  },
                },
                {
                  name: 'secondImage',
                  title: 'Second Image',
                  type: 'image',
                  validation: (Rule) => Rule.required(),
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
                        title: 'Second Image',
                      }
                    },
                  },
                },
              ],
              preview: {
                prepare() {
                  return {
                    title: 'Two Image',
                  }
                },
              },
            },
            {
              name: 'singleImage',
              title: 'Single Image',
              type: 'object',
              fields: [
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
                },
              ],
              preview: {
                prepare() {
                  return {
                    title: 'Single Image',
                  }
                },
              },
            },
          ],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Gallery Module',
          }
        },
      },
    },
  ],
}
