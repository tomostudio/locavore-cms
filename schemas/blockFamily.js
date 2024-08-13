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

const normalRender = (props) => (
  <p style={{ textAlign: "center" }}>{props.children}</p>
);

const leftRender = (props) => (
  <p style={{ textAlign: "left" }}>{props.children}</p>
);

const rightRender = (props) => (
  <p style={{ textAlign: "right" }}>{props.children}</p>
);

const annotationRender = (props) => (
  <span>
    {props.children}&nbsp;
    <HiAnnotation />
    &nbsp;
  </span>
);

export default {
  title: "Block Family",
  name: "blockFamily",
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
                title: "Link",
                name: "link",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "target_blank",
                type: "boolean",
                initialValue: true,
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
          title: "Left",
          value: "left",
          blockEditor: {
            icon: () => "Left",
            render: leftRender,
          },
        },
        {
          title: "Right",
          value: "right",
          blockEditor: {
            icon: () => "Right",
            render: rightRender,
          },
        },
      ],
      lists: [],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      title: "Rounded Button",
      name: "roundedButton",
      type: "object",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Link",
          name: "link",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }).required(),
        },
      ],
      preview: {
        select: {
          title: "name",
        },
      },
    },
    {
      title: "Image Module",
      name: "imageModule",
      type: "object",
      fields: [
        {
          title: "Image",
          name: "image",
          type: "image",
          validation: (Rule) =>
            Rule.custom((field, context) =>
              !field?.asset ? "Required" : true
            ),
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
          title: "Caption",
          name: "name",
          type: "string",
        },
      ],
      preview: {
        select: {
            title: "name",
            media: "image"
        }
      },
    },
  ],
};
