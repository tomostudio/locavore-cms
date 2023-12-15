import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { HiAnnotation } from "react-icons/hi";

const normalRender = (props) => (
  <p style={{ textAlign: "center" }}>{props.children}</p>
);

const h1Render = (props) => (
  <h1 style={{ textAlign: "center" }}>{props.children}</h1>
);

const h2Render = (props) => (
  <h2 style={{ textAlign: "center" }}>{props.children}</h2>
);

const h3Render = (props) => (
  <h3 style={{ textAlign: "center" }}>{props.children}</h3>
);

const h4Render = (props) => (
  <h4 style={{ textAlign: "center" }}>{props.children}</h4>
);

const h5Render = (props) => (
  <h5 style={{ textAlign: "center" }}>{props.children}</h5>
);

const annotationRender = (props) => (
  <span>
    {props.children}&nbsp;
    <HiAnnotation />
    &nbsp;
  </span>
);

export default {
  title: "Block Visit",
  name: "blockVisit",
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
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["mailto"],
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
          title: "Center",
          value: "normal",
          blockEditor: {
            render: normalRender,
          },
        },
        {
          title: "H1",
          value: "h1",
          blockEditor: {
            render: h1Render,
          },
        },
        {
          title: "H2",
          value: "h2",
          blockEditor: {
            render: h2Render,
          },
        },
        {
          title: "H3",
          value: "h3",
          blockEditor: {
            render: h3Render,
          },
        },
        {
          title: "H4",
          value: "h4",
          blockEditor: {
            render: h4Render,
          },
        },
        {
          title: "H5",
          value: "h5",
          blockEditor: {
            render: h5Render,
          },
        },
      ],
      lists: [],
    },
    {
      title: "Map Image",
      name: "mapImage",
      type: "object",
      fields: [
        {
          title: "Image Desktop",
          name: "imageDesktop",
          type: "image",
          description: "Image Size: 750 x 500 px",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: "Edit Alt Text",
              name: "name",
              type: "string",
              initialValue: "Locavore NXT",
            },
          ],
        },
        {
          title: "Image Mobile",
          name: "imageMobile",
          type: "image",
          description: "Image Size: 320 x 230 px",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: "Edit Alt Text",
              name: "name",
              type: "string",
              initialValue: "Locavore NXT",
            },
          ],
        },
        {
          title: "Link",
          name: "link",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Map Image",
          };
        },
      },
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
