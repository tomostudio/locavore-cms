export default {
  name: 'galleryComponent',
  title: 'Gallery Module',
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
                  initialValue: 'Locavore NXT',
                },
              ],
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
        {
          name: 'secondImage',
          title: 'Second Image',
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
                  initialValue: 'Locavore NXT',
                },
              ],
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
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
              initialValue: 'Locavore NXT',
            },
          ],
        },
        {
          name: 'caption',
          title: 'Caption',
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
              initialValue: 'Locavore NXT',
            },
          ],
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link to video',
          type: 'url',
        },
        {
          name: 'option',
          title: 'Size',
          type: 'string',
          options: {
            list: [
              { title: 'Normal', value: 'normal' },
              {
                title: 'Medium',
                value: 'medium',
              },
              {
                title: 'Wide',
                value: 'wide',
              },
            ],
            layout: 'radio',
          },
          initialValue: 'medium',
        },
        {
          title: 'White / Black Button',
          name: 'dark',
          type: 'boolean',
          initialValue: false,
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Video Module',
          }
        },
      },
    },
  ],
}
