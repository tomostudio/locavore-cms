export default {
  name: 'category',
  title: 'Article Category',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: "Border",
      name: "border",
      type: "boolean",
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
