import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings', 'editorial', 'family', 'social'].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Editorial')
                .child(
                  S.document().schemaType('editorial').documentId('editorial'),
                ),
              S.listItem()
                .title('Family')
                .child(
                  S.document().schemaType('family').documentId('family'),
                ),
              S.listItem()
                .title('Social')
                .child(
                  S.document().schemaType('social').documentId('social'),
                ),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
