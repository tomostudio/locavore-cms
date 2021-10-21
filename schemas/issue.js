export default {
  name: 'issue',
  title: 'Issue List',
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
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'JPEG / PNG / WEBP',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }
      ],
    },
    {
      title: 'Background 2',
      name: 'background2',
      type: 'image',
      description: 'JPEG / PNG / WEBP',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
        }
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
        title: "Background Color",
        name: "bgColor",
        type: "string",
    },
    {
        title: 'Date',
        name: 'date',
        type: 'date',
        options: {
            dateFormat: 'YYYY-MM',
            calendarTodayLabel: 'Today'
        }
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
      media: 'image',
    },
  },
}
