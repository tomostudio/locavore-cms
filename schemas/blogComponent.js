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
