import client from 'part:@sanity/base/client'

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
          if (slug) {
            if (slug.current.match(regex) !== null) {
              return true
            } else {
              return 'Not a valid slug'
            }
          } else {
            return 'Required'
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
              initialValue: 'Locavore NXT',
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
      title: "Internal Search Keywords",
      name: "keywords",
      type: "string"
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockCover',
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
          initialValue: 'Locavore NXT',
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
      validation: (Rule) => Rule.required(),
      initialValue: {
        _type: 'string',
        title: 'Blog', value: 'blog'
      },
    },
    {
      name: 'blog',
      type: 'blogComponent',
      title: 'Blog Module',
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
      name: 'readTime',
      title: 'Read Time',
      type: 'number',
    },
    {
      name: 'setColor',
      title: 'Set Color',
      type: 'string',
      options: {
        list: [
          { title: 'Article Color', value: 'articleColor' },
          {
            title: 'Use Category Color',
            value: 'categoryColor',
          },
        ],
        layout: 'radio'
      },
      initialValue: 'categoryColor'
      
    },
    {
      title: 'Set Article Color',
      name: 'color',
      type: 'color',
      hidden: ({ parent }) => !(parent?.setColor === 'articleColor'),
    },
    {
      name: 'categoryColor',
      title: 'Overwrite Article Color as Category Color',
      type: 'boolean',
      initialValue: true,
      readOnly: true,
      hidden: ({ parent }) => !(parent?.setColor === 'categoryColor'),
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
  ],
  orderings: [
    {
      title: 'Article Number',
      name: 'articleNumberAsc',
      by: [{ field: 'articleNumber', direction: 'asc' }],
    },
  ],
  initialValue: async () => ({
    articleNumber:
      (await client.fetch(`
      *[_type == "article" && !(_id in path("drafts.**"))] | order(articleNumber desc)[0].articleNumber
    `)) + 1,
    date: new Date().toISOString().slice(0, 10),
  }),
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      articleNumber: 'articleNumber',
      turnOffArticleNumber: 'turnOffArticleNumber',
    },
    prepare(selection) {
      const { title, media, articleNumber, turnOffArticleNumber } = selection
      return {
        title: `${!turnOffArticleNumber ? articleNumber + '.' : ''} ${title}`,
        media: media,
      }
    },
  },
}
