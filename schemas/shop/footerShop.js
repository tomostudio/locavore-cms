export default {
    name: 'footerShop',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'creditText',
        title: 'Credits Text',
        type: 'string',
      },
    ],
    preview: {
      prepare() {
        return {
          title: 'Footer',
        }
      },
    },
  }
  