export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      title: 'Issue',
      name: 'issue',
      type: 'reference',
      to: [{ type: 'issue' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
      }
    },
  },
}
