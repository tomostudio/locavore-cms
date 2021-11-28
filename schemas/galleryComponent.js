export default {
  name: 'galleryComponent',
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
        },
        {
          title: 'Name',
          name: 'name',
          type: 'string',
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
    {
      name: 'video',
      title: 'Video',
      type: 'object',
      fields: [
        {
          name: 'thumbnail',
          title: 'Thumbnail',
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
          name: 'link',
          title: 'Link',
          type: 'url',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Video',
          }
        },
      },
    },
  ],
}
