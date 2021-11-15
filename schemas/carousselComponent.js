export default {
  name: 'carousselComponent',
  title: 'Caroussel Component',
  type: 'array',
  options: {
    layout: 'grid',
  },
  of: [
    {
      name: 'image',
      title: 'Image',
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
}
