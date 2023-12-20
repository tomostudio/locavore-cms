import client from 'part:@sanity/base/client'

export default {
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Category Title',
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
          const regex = /^[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9])){2,}$/i;
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
