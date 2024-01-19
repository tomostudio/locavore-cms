import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { HiAnnotation } from "react-icons/hi";

const normalRender = (props) => (
  <p style={{ textAlign: "center" }}>{props.children}</p>
);

const annotationRender = (props) => (
  <span>
    {props.children}&nbsp;
    <HiAnnotation />&nbsp;
  </span>
);

export default {
  title: "Block Popup",
  name: "blockPopup",
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
                hidden: ({ parent }) => !(parent?.select_link === "link"),
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
            ],
          },
        ],
      },
      styles: [
        {
          title: "Center",
          value: "normal",
          blockEditor: {
            render: normalRender,
          },
        },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
      ],
      lists: [],
    },
    {
      title: "Button",
      name: "button",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Url",
          name: "url",
          type: "url",
        },
      ],
    },
    {
      title: "Line Divider",
      name: "lineDivider",
      type: "object",
      icon: AiOutlineMinus,
      fields: [
        {
          title: "Line",
          name: "spacer",
          type: "boolean",
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Line Divider",
          };
        },
      },
    },
    {
      title: "Dot Divider",
      name: "dotDivider",
      type: "object",
      icon: GoPrimitiveDot,
      fields: [
        {
          title: "Dot",
          name: "spacer",
          type: "boolean",
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Dot Divider",
          };
        },
      },
    },
    {
      title: "Column Block",
      name: "columnBlock",
      type: "object",
      fields: [
        {
          title: "Left",
          name: "left",
          type: "object",
          fields: [
            {
              title: "Editor",
              name: "editor",
              type: "blockColumn",
            },
          ],
        },
        {
          title: "Right",
          name: "right",
          type: "object",
          fields: [
            {
              title: "Editor",
              name: "editor",
              type: "blockColumn",
            },
          ],
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Column Block",
          };
        },
      },
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      fields: [
        {
          title: "Edit Alt Text",
          name: "alt",
          type: "string",
          initialValue: "Locavore NXT",
        },
      ],
    },
  ],
};
