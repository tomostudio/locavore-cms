import client from 'part:@sanity/base/client'

export default {
  name: 'article',
  title: 'Article List',
  type: 'document',
  fields: [
    {
      title: 'Issue',
      description: 'Select an Issue where this article belongs to',
      name: 'issue',
      type: 'reference',
      to: [{ type: 'issue' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'articleNumber',
      title: 'Article Number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Article Title',
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
      description:
        'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          description:
            'Enter up to 400 characters to describe this article. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description:
            'Enter some keywords to describe this article (separated by commas)',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description:
            '800 x 600 | PNG / JPEG / WEBP | max 100kb. This image is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp)',
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
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Internal Search Keywords',
      description:
        'Enter some keywords to help in searching this article within the website (separated by commas)',
      name: 'keywords',
      type: 'string',
    },
    {
      title: 'Show Article Description',
      name: 'show_article',
      type: 'boolean',
      initialValue: true,
    },
    {
      title: 'Article Description',
      description: 'Opening words for this article',
      name: 'description',
      type: 'blockCover',
      hidden: ({ parent }) => !(parent?.show_article === true),
    },
    {
      name: 'thumbnail',
      description: 'A cover image for this article | PNG / JPEG / WEBP',
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
      description: 'Choose a layout for this article',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Blog', value: 'blog' },
          { title: 'Carousel', value: 'caroussel' },
          { title: 'Video', value: 'video' },
          { title: 'Gallery', value: 'gallery' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'blog',
    },
    {
      name: 'blog',
      type: 'blogComponent',
      title: 'Blog Module',
      description: 'You may add multiple module to be included in this article',
      hidden: ({ parent }) => !(parent?.layout === 'blog'),
    },
    {
      name: 'caroussel',
      description: 'You may reorder the items rotated in the carousel',
      type: 'carousselComponent',
      title: 'Carousel Component',
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
      description: 'You may add multiple items to be included in this article',
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
      description:
        'Manually select an article color or let the system match the color based on the Category Color',
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
        layout: 'radio',
      },
      initialValue: 'categoryColor',
    },
    {
      title: 'Set Article Color',
      name: 'color',
      type: 'color',
      hidden: ({ parent }) => !(parent?.setColor === 'articleColor'),
    },
    {
      title: 'Date Published',
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
