export default {
  name: 'article',
  title: 'Article List',
  type: 'document',
  fields: [
    {
      name: 'articleNumber',
      title: 'Article Number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
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
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
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
      hidden: ({ parent }) => !(parent?.layout === 'blog'),
    },
    {
      name: 'caroussel',
      type: 'carousselComponent',
      title: 'Caroussel Component',
      hidden: ({ parent }) => !(parent?.layout === 'caroussel'),
    },
    {
      name: 'video',
      type: 'videoComponent',
      title: 'Video Component',
      hidden: ({ parent }) => !(parent?.layout === 'video'),
    },
    {
      name: 'gallery',
      type: 'galleryComponent',
      title: 'Gallery Component',
      hidden: ({ parent }) => !(parent?.layout === 'gallery'),
    },
    {
      title: 'Date Publish',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
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
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      articleNumber: 'articleNumber',
    },
    prepare(selection) {
      const { title, media, articleNumber } = selection
      return {
        title: `${articleNumber ? articleNumber + '.' : ''} ${title}`,
        media: media,
      }
    },
  },
}