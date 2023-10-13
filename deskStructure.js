import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import {
  BiBookOpen,
  BiCalendarAlt,
  BiCategoryAlt,
  BiHive,
  BiHome,
  BiMap,
  BiMenu,
  BiLeaf,
  BiGridAlt,
  BiBowlRice,
  BiGroup,
  BiShoppingBag,
} from "react-icons/bi";
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
            "facilities",
            "facilitiesList",
            "collaborator",
            "collaboratorList",
            "event",
            "eventList",
            "visit",
            "shopifyProducts",
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
        .title("NXT - Preview")
        .icon(() => <BiLeaf />)
        .child(
          S.list()
            .title("NXT - Preview")
            .items([
              S.listItem()
                .title("Home")
                .icon(() => <BiGridAlt />)
                .child(
                  S.document().schemaType("homeNxt").documentId("homeNxt")
                ),
              S.listItem()
                .title("Menu")
                .icon(() => <BiBowlRice />)
                .child(S.document().schemaType("menu").documentId("menu")),
              S.documentTypeListItem("facilitiesList").icon(() => <BiHive />),
              S.listItem()
                .title("Pages")
                .icon(() => <BiBookOpen />)
                .child(
                  S.list()
                    .title("Pages")
                    .items([
                      S.listItem()
                        .title("Our Facilities (List)")
                        .icon(() => <BiCategoryAlt />)
                        .child(
                          S.document()
                            .schemaType("facilities")
                            .documentId("facilities")
                        ),
                      S.listItem()
                        .title("Our Collaborators (List)")
                        .icon(() => <BiHive />)
                        .child(
                          S.document()
                            .schemaType("collaborator")
                            .documentId("collaborator")
                        ),
                      S.listItem()
                        .title("Our Events & Programs (List)")
                        .icon(() => <BiCalendarAlt />)
                        .child(
                          S.document().schemaType("event").documentId("event")
                        ),
                    ])
                ),
              S.documentTypeListItem("collaboratorList").icon(() => (
                <BiGroup />
              )),
              S.documentTypeListItem("eventList").icon(() => <BiCalendarAlt />),
              S.listItem()
                .title("Visit")
                .icon(() => <BiMap />)
                .child(S.document().schemaType("visit").documentId("visit")),
            ])
        ),
      S.listItem()
        .title("Shop - Preview")
        .icon(() => <BiShoppingBag />)
        .child(
          S.list()
            .title("Shop - Preview")
            .items([
              S.documentTypeListItem("shopifyProducts").icon(() => (
                <FiFileText />
              )),
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
