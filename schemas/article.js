export default {
  name: 'article',
  title: 'List',
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
      title: 'Issue',
      name: 'issue',
      type: 'reference',
      to: [{ type: 'issue' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
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
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Blog', value: 'blog' },
          { title: 'Caroussel', value: 'caroussel' },
          { title: 'Video', value: 'video' },
          { title: 'Gallery', value: 'gallery' },
        ],
      },
    },
    {
      name: 'blog',
      type: 'blogComponent',
      title: 'Blog Component',
      hidden: ({ document }) =>
        !document?.layout ? true : document.layout === 'blog' ? false : true,
    },
    {
      name: 'caroussel',
      type: 'carousselComponent',
      title: 'Caroussel Component',
      hidden: ({ document }) =>
        !document?.layout
          ? true
          : document.layout === 'caroussel'
          ? false
          : true,
    },
    {
      name: 'video',
      type: 'videoComponent',
      title: 'Video Component',
      hidden: ({ document }) =>
        !document?.layout ? true : document.layout === 'video' ? false : true,
    },
    {
      name: 'gallery',
      type: 'galleryComponent',
      title: 'Gallery Component',
      hidden: ({ document }) =>
        !document?.layout ? true : document.layout === 'gallery' ? false : true,
    },
    {
      title: 'Date Publish',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
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
