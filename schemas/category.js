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
      initialValue: false
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    border: false,
  },
  preview: {
    select: {
      title: 'title',
    },
  },
}
