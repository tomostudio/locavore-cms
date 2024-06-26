/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react";
import { RiSubscript2, RiSuperscript2 } from "react-icons/ri";
import { HiAnnotation } from "react-icons/hi";

const subRender = (props) => <sub>{props.children}</sub>;

const supRender = (props) => <sup>{props.children}</sup>;

const annotationRender = (props) => (
  <span>
    {props.children}&nbsp;
    <HiAnnotation />
    &nbsp;
  </span>
);

export default {
  title: "Block Cover",
  name: "blockCoverNxt",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Strike", value: "strike-through" },
          { title: "Underline", value: "underline" },
          {
            title: "Subscript",
            value: "sub",
            blockEditor: {
              icon: () => <RiSubscript2 />,
              render: subRender,
            },
          },
          {
            title: "Superscript",
            value: "sup",
            blockEditor: {
              icon: () => <RiSuperscript2 />,
              render: supRender,
            },
          },
        ],
        annotations: [
          {
            title: "Add Annotations",
            name: "add_ann",
            type: "object",
            blockEditor: {
              icon: () => <HiAnnotation />,
              render: annotationRender,
            },
            fields: [
              {
                title: "Select Link",
                name: "select_link",
                type: "string",
                options: {
                  list: [
                    { title: "Default Link", value: "default" },
                    { title: "Whatsapp Link", value: "wa_link" },
                    { title: "Email", value: "email" },
                  ],
                  layout: "radio",
                },
                initialValue: "default",
              },
              {
                title: "Open in new tab",
                name: "target_blank",
                type: "boolean",
                initialValue: true,
                hidden: ({ parent }) => !(parent?.select_link === "default"),
              },
              {
                name: "arrow",
                title: "Arrow",
                type: "boolean",
                initialValue: false,
                hidden: ({ parent }) => !(parent?.select_link === "default"),
              },
              {
                title: "Link",
                name: "link",
                type: "url",
                hidden: ({ parent }) => !(parent?.select_link === "default"),
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto"],
                  }),
              },
              {
                title: "WA Link",
                name: "wa_link",
                type: "url",
                hidden: ({ parent }) => !(parent?.select_link === "wa_link"),
              },
              {
                title: "Email",
                name: "email",
                type: "url",
                validation: Rule => Rule.uri({
                  scheme: ['mailto']
                }),
                hidden: ({ parent }) => !(parent?.select_link === "email"),
              },
              {
                title: "Font",
                name: "font",
                type: "string",
                options: {
                  list: [
                    { title: "Serif", value: "font-serif" },
                    { title: "Sans", value: "font-sans" },
                    { title: "Display", value: "display" },
                  ],
                  layout: "radio",
                },
                initialValue: "display",
              },
              {
                title: "Text Color",
                name: "textColor",
                type: "color",
              },
              {
                title: "Font Size",
                name: "fontSize",
                type: "number",
              },
            ],
          },
        ],
      },
      styles: [
        {
          title: "Normal",
          value: "normal",
        },
      ],
      lists: [],
    },
    {
      title: "Button Link",
      name: "buttonLink",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Link",
          name: "link",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "mailto"],
            }).required(),
        },
      ],
      preview: {
        select: {
          title: "title",
        },
      },
    },
  ],
};
