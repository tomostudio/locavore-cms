
export default {
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  __experimental_actions: [],
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
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
