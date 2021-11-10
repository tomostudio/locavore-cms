export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
          if (slug.current.match(regex) !== null) {
            return true
          } else {
            return 'Not a valid slug'
          }
        }),
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description: '800 x 600 | PNG / JPEG / WEBP | max 100kb',
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
    },
    {
      title: "Issue",
      name: "issue",
      type: "reference",
      to: [{ type: "issue" }],
    },
    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    },
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
      name: 'component',
      title: 'Component',
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
    },
    {
      title: 'Card Color',
      name: 'cardColor',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
}
