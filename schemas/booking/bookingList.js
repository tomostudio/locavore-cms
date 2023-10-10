export default {
  name: 'bookingList',
  title: 'Family Booking',
  type: 'document',
  fields: [
    {
      name: 'page_title',
      title: 'Header Title',
      type: 'string',
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
      title: 'RSVP ID',
      name: 'rsvp',
      type: 'number',
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
            'Enter up to 400 characters to describe the page. This description is what will be displayed on search engines or when this page is being shared (e.g. Google or WhatsApp).',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description:
            'Enter some keywords to describe the page (separated by commas)',
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
              name: 'alt',
              type: 'string',
              initialValue: 'Locavore NXT',
            },
          ],
        },
      ],
    },
    {
      title: 'Cover Image',
      name: 'cover_image',
      type: 'object',
      fields: [
        {
          title: 'Desktop',
          name: 'desktop',
          type: 'image',
          validation: (Rule) =>
            Rule.custom(({ asset }) => {
              return asset ? true : "Required";
            }),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'alt',
              type: 'string',
              initialValue: 'Locavore NXT',
            },
          ],
        },
        {
          title: 'Mobile',
          name: 'mobile',
          type: 'image',
          validation: (Rule) =>
            Rule.custom(({ asset }) => {
              return asset ? true : "Required";
            }),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'alt',
              type: 'string',
              initialValue: 'Locavore NXT',
            },
          ],
        },
        {
          title: "Cover / Contain",
          name: "option",
          type: "boolean",
          initialValue: false,
        }
      ],
    },
    {
      title: 'Content Top',
      name: 'content_top',
      type: 'blockEditor',
    },
    {
      title: 'Content Bottom',
      name: 'content_bottom',
      type: 'blockEditor',
    },
    {
      title: 'Popup Button',
      name: 'popup',
      type: 'array',
      of: [
        {
          title: 'Popup Button',
          name: 'popup',
          type: 'object',
          fields: [
            {
              title: 'Button Text',
              name: 'button_text',
              type: 'string',
            },
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Content',
              name: 'content',
              type: 'blockPopup',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'page_title',
      media: 'cover_image.desktop',
    },
  },
}
