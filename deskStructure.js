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
            'search',
            'article',
            'category',
            'home',
            'issue',
            'family_list',
            'member_list',
            'header',
            'footer'
          ].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Editorial')
        .child(
          S.list()
            .title('Editorial')
            .items([
              S.documentTypeListItem('issue'),
              S.documentTypeListItem('article'),
              S.documentTypeListItem('category'),
              S.listItem()
                .title('Article By Issue')
                .child(
                  S.documentTypeList('issue')
                    .title('Article By Issue')
                    .child(authorId =>
                      S.documentList()
                        .title('Article')
                        .filter('_type == "article" && $authorId == issue._ref')
                        .params({ authorId })
                    )
                ),
            ]),
        ),
      S.listItem()
        .title('Family')
        .child(
          S.list()
            .title('Family')
            .items([
              S.documentTypeListItem('family_list'),
              S.documentTypeListItem('member_list'),
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
                .title('Editorial')
                .child(
                  S.list()
                    .title('Editorial')
                    .items([
                      S.listItem()
                        .title('Landing Page')
                        .child(
                          S.document().schemaType('editorial').documentId('editorial'),
                        ),
                      S.listItem()
                        .title('Search')
                        .child(S.document().schemaType('search').documentId('search')),
                    ]),
                ),
              S.listItem()
                .title('Family Landing')
                .child(S.document().schemaType('family').documentId('family')),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .child(S.document().schemaType('settings').documentId('settings')),
              S.listItem()
                .title('Header')
                .child(S.document().schemaType('header').documentId('header')),
              S.listItem()
                .title('Footer')
                .child(S.document().schemaType('footer').documentId('footer')),
            ]),
        ),
    ])
