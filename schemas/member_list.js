import client from 'part:@sanity/base/client'

export default {
  name: 'member_list',
  title: 'Member List',
  type: 'document',
  fields: [
    {
      title: 'Family Connection',
      name: 'family',
      type: 'reference',
      to: [{ type: 'family_list' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hideNamePosition',
      title: 'Show Name & Position',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Member Image',
      description: 'JPEG/PNG/WEBP (Recommended Dimension # x #)',
      name: 'image',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
          initialValue: 'Locavore NXT',
        },
      ],
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      hidden: ({ parent }) => !(parent?.hideNamePosition === true),
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
      hidden: ({ parent }) => !(parent?.hideNamePosition === true),
    },
    {
      name: 'docnum',
      title: 'Document Number',
      type: 'number',
      hidden: true,
    },
  ],
  initialValue: async () => ({
    docnum:
      (await client.fetch(`
          count(*[_type == "member_list" && !(_id in path("drafts.**"))])
      `)) + 1,
  }),
  preview: {
    select: {
      title: 'family.title',
      name: 'name',
      media: 'image',
      docnum: 'docnum',
    },
    prepare(selection) {
      const { title, name, media, docnum } = selection
      return {
        title: `${name ? name : `Member ${docnum}`} & ${title}`,
        media: media,
      }
    },
  },
}
