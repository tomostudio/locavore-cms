import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'settings',
            'editorial',
            'family',
            'social',
            'search',
            'blog',
            'caroussel'
          ].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Article List')
        .child(
          S.list()
            .title('Article List')
            .items([
              S.documentTypeListItem('blog'),
              S.documentTypeListItem('caroussel')
            ]),
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
                .child(S.document().schemaType('family').documentId('family')),
              S.listItem()
                .title('Social')
                .child(S.document().schemaType('social').documentId('social')),
              S.listItem()
                .title('Search')
                .child(S.document().schemaType('search').documentId('search')),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
