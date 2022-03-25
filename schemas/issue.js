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
      title: 'Issue Title',
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
      title: 'Thumbnail',
      description: 'A cover image for this issue',
      name: 'thumbnail',
      type: 'object',
      fields: [
        {
          title: 'Placeholder',
          description: 'JPEG/PNG/WEBP (Recommended size # x #)',
          name: 'placeholder',
          type: 'image',
          description: 'JPEG / PNG / WEBP',
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
          title: 'Fallback Color',
          description: 'If image failed to render, it will use the chosen color as background instead',
          name: 'color',
          type: 'color',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Landing Image 1',
      description: 'Background image when a reader open this issue',
      name: 'image1',
      type: 'object',
      fields: [
        {
          title: 'Placeholder',
          description: 'JPEG/PNG/WEBP (Recommended size # x #)',
          name: 'placeholder',
          type: 'image',
          description: 'JPEG / PNG / WEBP',
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
          title: 'Fallback Color',
          description: 'If image failed to render, it will use the chosen color as background instead',
          name: 'color',
          type: 'color',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Landing Image 2',
      description: 'Background image when as a reader scrolls down the issue',
      name: 'image2',
      type: 'object',
      fields: [
        {
          title: 'Placeholder',
          description: 'JPEG/PNG/WEBP (Recommended size # x #)',
          name: 'placeholder',
          type: 'image',
          description: 'JPEG / PNG / WEBP',
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
          title: 'Fallback Color',
          description: 'If image failed to render, it will use the chosen color as background instead',
          name: 'color',
          type: 'color',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'SEO',
      description: 'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          description: 'Enter up to 400 characters to describe this issue',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description: 'Enter some keywords to describe this issue (separated by commas)',
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
      name: 'coverText',
      title: 'Issue Cover Text',
      type: 'blockCover',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Issue Description',
      type: 'blockIssue',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headerOption',
      title: 'Header Menu Background',
      type: 'string',
      options: {
        list: [
          { title: 'Hidden', value: 'hidden' },
          { title: 'Solid White', value: 'white' },
          { title: 'Solid Black', value: 'black' },
          { title: 'Blur Black', value: 'blur-black' },
          { title: 'Blur White', value: 'blur-white' },
          { title: 'Transparent Black', value: 'transparent-black' },
          { title: 'Transparent White', value: 'transparent-white' },
        ],
        layout: 'radio'
      },
      initialValue: 'black',
    },
    {
      name: 'dark',
      title: 'Text Color',
      type: 'string',
      options: {
        list: [
          { title: 'Black Text', value: 'black-text' },
          { title: 'White Text', value: 'white-text' },
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'turnOffArticleNumber',
      description: 'If enabled, article number will be hidden',
      title: 'Turn Off Article Number',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Coming Soon',
      description: 'If enabled, this issue will be listed under Coming Soon',
      name: 'comingSoon',
      type: 'boolean',
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
      title: 'Issue Number',
      name: 'issueNumberAsc',
      by: [{ field: 'issueNumber', direction: 'asc' }],
    },
  ],
  initialValue: {
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
        title: `${issueNumber + '.'} ${title}`,
        media: media,
      }
    },
  },
}
