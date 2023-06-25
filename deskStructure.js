import S from "@sanity/desk-tool/structure-builder";
import React from "react";
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
} from "react-icons/fi";

export default () =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "settings",
            "editorial",
            "family",
            "search",
            "article",
            "category",
            "home",
            "homeNxt",
            "menu",
            "facilitiesList",
            'collaborator',
            "collaboratorList",
            "event",
            "eventList",
            "visit",
            "homeBooking",
            "bookingList",
            "issue",
            "family_list",
            "member_list",
            "header",
            "footer",
          ].includes(listItem.getId())
      ),
      S.listItem()
        .title("Editorial")
        .icon(() => <FiBook />)
        .child(
          S.list()
            .title("Editorial")
            .items([
              S.documentTypeListItem("issue").icon(() => <FiBookmark />),
              S.listItem()
                .title("Article By Issue")
                .icon(() => <FiFilter />)
                .child(
                  S.documentTypeList("issue")
                    .title("Article By Issue")
                    .child((authorId) =>
                      S.documentList()
                        .title("Article")
                        .filter('_type == "article" && $authorId == issue._ref')
                        .params({ authorId })
                    )
                ),
              S.documentTypeListItem("category").icon(() => <FiFlag />),
              S.documentTypeListItem("article").icon(() => <FiFileText />),
            ])
        ),
      S.listItem()
        .title("Family")
        .icon(() => <FiHome />)
        .child(
          S.list()
            .title("Family")
            .items([
              S.documentTypeListItem("family_list").icon(() => <FiAward />),
              S.documentTypeListItem("member_list").icon(() => <FiUsers />),
            ])
        ),
      S.listItem()
        .title("Pages")
        .icon(() => <FiFile />)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home")
                .icon(() => <FiStar />)
                .child(S.document().schemaType("home").documentId("home")),
              S.listItem()
                .title("Editorial")
                .icon(() => <FiStar />)
                .child(
                  S.list()
                    .title("Editorial")
                    .items([
                      S.listItem()
                        .title("Landing Page")
                        .icon(() => <FiStar />)
                        .child(
                          S.document()
                            .schemaType("editorial")
                            .documentId("editorial")
                        ),
                      S.listItem()
                        .title("Search")
                        .icon(() => <FiStar />)
                        .child(
                          S.document().schemaType("search").documentId("search")
                        ),
                    ])
                ),
              S.listItem()
                .title("Family Landing")
                .icon(() => <FiStar />)
                .child(S.document().schemaType("family").documentId("family")),
            ])
        ),
      S.listItem()
        .title("Booking")
        .icon(() => <FiAward />)
        .child(
          S.list()
            .title("Booking")
            .items([
              S.listItem()
                .title("Locavore Booking")
                .icon(() => <FiHome />)
                .child(
                  S.document()
                    .schemaType("homeBooking")
                    .documentId("homeBooking")
                ),
              S.documentTypeListItem("bookingList").icon(() => <FiFileText />),
            ])
        ),
      S.listItem()
        .title("NXT - WIP")
        .icon(() => <FiFile />)
        .child(
          S.list()
            .title("NXT")
            .items([
              S.listItem()
                .title("Home")
                .icon(() => <FiStar />)
                .child(
                  S.document().schemaType("homeNxt").documentId("homeNxt")
                ),
              S.listItem()
                .title("Menu")
                .icon(() => <FiStar />)
                .child(S.document().schemaType("menu").documentId("menu")),
              S.documentTypeListItem("facilitiesList").icon(() => <FiStar />),
              S.listItem()
                .title("Collaborator")
                .icon(() => <FiStar />)
                .child(S.document().schemaType("collaborator").documentId("collaborator")),
              S.documentTypeListItem("collaboratorList").icon(() => <FiStar />),
              S.listItem()
                .title("Event")
                .icon(() => <FiStar />)
                .child(S.document().schemaType("event").documentId("event")),
              S.documentTypeListItem("eventList").icon(() => <FiStar />),
              S.listItem()
                .title("Visit")
                .icon(() => <FiStar />)
                .child(S.document().schemaType("visit").documentId("visit")),
            ])
        ),
      S.listItem()
        .title("Settings")
        .icon(() => <FiSettings />)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("General")
                .icon(() => <FiSliders />)
                .child(
                  S.document().schemaType("settings").documentId("settings")
                ),
              S.listItem()
                .title("Header")
                .icon(() => <FiSliders />)
                .child(S.document().schemaType("header").documentId("header")),
              S.listItem()
                .title("Footer")
                .icon(() => <FiSliders />)
                .child(S.document().schemaType("footer").documentId("footer")),
            ])
        ),
    ]);
