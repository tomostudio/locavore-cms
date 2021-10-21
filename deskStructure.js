import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['settings'].includes(
            listItem.getId(),
          ),
      ),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings'))
    ])
