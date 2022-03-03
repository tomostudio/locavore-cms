import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import {
  FiSettings,
  FiBook,
  FiFile,
  FiHome,
  FiStar,
  FiBookmark,
  FiFileText,
  FiFlag,
  FiFilter,
  FiAward,
  FiUsers, 
  FiSliders,

} from 'react-icons/fi'

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
            'footer',
          ].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Editorial')
        .icon(() => <FiBook />)
        .child(
          S.list()
            .title('Editorial')
            .items([
              S.documentTypeListItem('issue').icon(() => <FiBookmark />),
              S.documentTypeListItem('article').icon(() => <FiFileText />),
              S.documentTypeListItem('category').icon(() => <FiFlag />),
              S.listItem()
                .title('Article By Issue')
                .icon(() => <FiFilter />)
                .child(
                  S.documentTypeList('issue')
                    .title('Article By Issue')
                    .child((authorId) =>
                      S.documentList()
                        .title('Article')
                        .filter('_type == "article" && $authorId == issue._ref')
                        .params({ authorId }),
                    ),
                ),
            ]),
        ),
      S.listItem()
        .title('Family')
        .icon(() => <FiHome />)
        .child(
          S.list()
            .title('Family')
            .items([
              S.documentTypeListItem('family_list')
              .icon(() => <FiAward />),
              S.documentTypeListItem('member_list')
              .icon(() => <FiUsers />),
            ]),
        ),
      S.listItem()
        .title('Pages')
        .icon(() => <FiFile />)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(() => <FiStar />)
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('Editorial')
                .icon(() => <FiStar />)
                .child(
                  S.list()
                    .title('Editorial')
                    .items([
                      S.listItem()
                        .title('Landing Page')
                        .icon(() => <FiStar />)
                        .child(
                          S.document()
                            .schemaType('editorial')
                            .documentId('editorial'),
                        ),
                      S.listItem()
                        .title('Search')
                        .icon(() => <FiStar />)
                        .child(
                          S.document()
                            .schemaType('search')
                            .documentId('search'),
                        ),
                    ]),
                ),
              S.listItem()
                .title('Family Landing')
                .icon(() => <FiStar />)
                .child(S.document().schemaType('family').documentId('family')),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .icon(() => <FiSettings />)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .icon(() => <FiSliders />)
                .child(
                  S.document().schemaType('settings').documentId('settings'),
                ),
              S.listItem()
                .title('Header')
                .icon(() => <FiSliders />)
                .child(S.document().schemaType('header').documentId('header')),
              S.listItem()
                .title('Footer')
                .icon(() => <FiSliders />)
                .child(S.document().schemaType('footer').documentId('footer')),
            ]),
        ),
    ])
