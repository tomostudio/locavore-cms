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
          initialValue: "Locavore NXT"
        },    
        {
          name: 'objectFit',
          title: 'Object Fit',
          type: 'string',
          options: {
            list: [
              { title: 'Cover', value: 'cover' },
              {
                title: 'Contain',
                value: 'contain',
              },
            ],
            layout: 'radio',
          }, 
          initialValue: 'cover',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}
