export default {
  name: 'blogComponent',
  title: 'Blog Component',
  type: 'array',
  of: [
    {
      name: 'orange',
      title: 'Content Color Frame Module',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) =>
            Rule.custom((field, context) => {
              if (field) {
                if (
                  context.document.blog
                    .filter((item) => item._type === 'orange')
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
                            .replace(/[^\w-]+/g, '')
                    ).length > 1
                ) {
                  return 'Title must be unique';
                } else {
                  return true;
                }
              } else {
                return true;
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
          };
        },
      },
    },
    {
      name: 'white',
      title: 'Content No Frame Module',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) =>
            Rule.custom((field, context) => {
              if (field) {
                if (
                  context.document.blog
                    .filter((item) => item._type === 'white')
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
                            .replace(/[^\w-]+/g, '')
                    ).length > 1
                ) {
                  return 'Title must be unique';
                } else {
                  return true;
                }
              } else {
                return true;
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
          };
        },
      },
    },
    {
      name: 'video',
      type: 'videoComponent',
      title: 'Video Module',
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
                      };
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
                      };
                    },
                  },
                },
              ],
              preview: {
                prepare() {
                  return {
                    title: 'Two Image',
                  };
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
                    title: 'Single Image',
                  };
                },
              },
            },
          ],
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Gallery',
          };
        },
      },
    },
  ],
};
