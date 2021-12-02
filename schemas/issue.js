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
      title: 'Thumbnail',
      name: 'thumbnail',
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
      title: 'Image 1',
      name: 'image',
      type: 'image',
      description: 'JPEG / PNG / WEBP',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
        }
      ],
    },
    {
      title: 'Image 2',
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
        type: "color",
        validation: (Rule) => Rule.required(),
    },
    {
      title: "Dark",
      name: "dark",
      type: "boolean",
    },
    {
      title: "Coming Soon",
      name: "comingSoon",
      type: "boolean",
    },
    {
      title: 'Date Publish',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
          dateFormat: 'YYYY-MM-DD',
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
  initialValue: {
    dark: false,
    comingSoon: false,
  },

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
