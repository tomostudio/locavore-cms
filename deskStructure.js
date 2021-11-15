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
            'article',
            'category',
            'home',
          ].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Article')
        .child(
          S.list()
            .title('Article')
            .items([
              S.documentTypeListItem('article'),
              S.documentTypeListItem('category'),
            ]),
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('Editorial Landing')
                .child(
                  S.document().schemaType('editorial').documentId('editorial'),
                ),
              S.listItem()
                .title('Family Landing')
                .child(S.document().schemaType('family').documentId('family')),
              S.listItem()
                .title('Social Landing')
                .child(S.document().schemaType('social').documentId('social')),
              S.listItem()
                .title('Search Landing')
                .child(S.document().schemaType('search').documentId('search')),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
