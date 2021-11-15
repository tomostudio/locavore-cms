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
            title: 'Image Single',
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
    },
  ],
}
