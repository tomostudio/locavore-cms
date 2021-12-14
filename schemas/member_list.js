export default {
  name: 'member_list',
  title: 'Member List',
  type: 'document',
  fields: [
    {
      title: 'Family Name',
      name: 'family',
      type: 'reference',
      to: [{ type: 'family_list' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
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
      title: "family.title",
      name: 'name',
      media: 'image',
    },
    prepare(selection) {
      const { title, name, media } = selection
      return {
        title: `${name ? name : '0'} & ${title}`,
        media: media,
      }
    },
  },
}
