import client from 'part:@sanity/base/client'

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
      name: "hideNamePosition",
      title: "Hide Name & Position",
      type: "boolean",
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
      name: 'docnum',
      title: 'Document Number',
      type: 'number',
      hidden: true,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],
  initialValue: async () => ({
    docnum:
      (await client.fetch(`
       count(*[_type == "member_list"])
    `)) + 1,
  }),
  preview: {
    select: {
      title: 'family.title',
      name: 'name',
      media: 'image',
      docnum: "docnum",
    },
    prepare(selection) {
      const { title, name, media, docnum } = selection
      return {
        title: `${name ? name : `Family Member ${docnum}`} & ${title}`,
        media: media,
      }
    },
  },
}
