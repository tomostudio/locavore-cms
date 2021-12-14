export default {
  name: 'issue',
  title: 'Issue List',
  type: 'document',
  fields: [
    {
      name: 'issueNumber',
      title: 'Issue Number',
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
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'object',
      fields: [
        {
          title: 'Placeholder',
          name: 'placeholder',
          type: 'image',
          description: 'JPEG / PNG / WEBP',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
            },
          ],
        },
        {
          title: 'Fallback Color',
          name: 'color',
          type: 'color',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Landing Image 1',
      name: 'image1',
      type: 'object',
      fields: [
        {
          title: 'Placeholder',
          name: 'placeholder',
          type: 'image',
          description: 'JPEG / PNG / WEBP',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
            },
          ],
        },
        {
          title: 'Fallback Color',
          name: 'color',
          type: 'color',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Landing Image 2',
      name: 'image2',
      type: 'object',
      fields: [
        {
          title: 'Placeholder',
          name: 'placeholder',
          type: 'image',
          description: 'JPEG / PNG / WEBP',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
            },
          ],
        },
        {
          title: 'Fallback Color',
          name: 'color',
          type: 'color',
          validation: (Rule) => Rule.required(),
        },
      ],
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
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headerOption',
      title: 'Header Option',
      type: 'string',
      options: {
        list: [
          { title: 'Hidden', value: 'hidden' },
          { title: 'Solid White', value: 'solid-white' },
          { title: 'Solid Black', value: 'solid-black' },
          { title: 'Blur Black', value: 'blur-black' },
          { title: 'Blur White', value: 'blur-white' },
          { title: 'Transparent Black', value: 'transparent-black' },
          { title: 'Transparent White', value: 'transparent-white' },
        ],
      },
      initialValue: 'black',
    },
    {
      name: 'dark',
      title: 'Dark',
      type: 'string',
      options: {
        list: [
          { title: 'Black Text', value: 'black-text' },
          { title: 'White Text', value: 'white-text' }
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Coming Soon',
      name: 'comingSoon',
      type: 'boolean',
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
  initialValue: {
    dark: false,
    comingSoon: false,
  },

  preview: {
    select: {
      title: 'title',
      media: 'thumbnail.placeholder',
      issueNumber: 'issueNumber',
    },
    prepare(selection) {
      const { title, media, issueNumber } = selection
      return {
        title: `${issueNumber ? issueNumber + '.' : ''} ${title}`,
        media: media,
      }
    },
  },
}
