export default {
  name: 'category',
  title: 'Article Category',
  type: 'document',
  fields: [
    {
      title: 'Category Title',
      name: 'title',
      type: 'string',
    },
    {
      title: "Border",
      description: 'If enabled, a border will be added to surround the article cover in this Issue',
      name: "border",
      type: "boolean",
      initialValue: false
    },
    {
      title: 'Color',
      description: 'Select a background color for the articles in this Issue',
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
