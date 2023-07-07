import React from "react";
import { BiFontSize } from "react-icons/bi";
import { RiSubscript2, RiSuperscript2 } from "react-icons/ri";
import { HiAnnotation } from "react-icons/hi";

const subRender = (props) => <sub>{props.children}</sub>;

const supRender = (props) => <sup>{props.children}</sup>;

const largeRender = (props) => (
  <span style={{ fontSize: "1.5em" }}>{props.children}</span>
);

const centerRender = (props) => (
  <p style={{ textAlign: "center" }}>{props.children}</p>
);

const leftRender = (props) => (
  <p style={{ textAlign: "left" }}>{props.children}</p>
);

const rightRender = (props) => (
  <p style={{ textAlign: "right" }}>{props.children}</p>
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
  title: "Block Content Menu",
  name: "blockMenu",
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
          {
            title: "Larger Size",
            value: "largerSize",
            blockEditor: {
              icon: () => <BiFontSize />,
              render: largeRender,
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
              },
              {
                title: "Open in new tab",
                name: "target_blank",
                type: "boolean",
                initialValue: true,
              },
              {
                title: "Text Color",
                name: "textColor",
                type: "color",
              },
              {
                title: "Background Color",
                name: "bgColor",
                type: "color",
              },
              {
                title: "Font Size",
                name: "fontSize",
                type: "number",
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
                initialValue: "font-display",
              },
            ],
          },
        ],
      },
      styles: [
        {
          title: "Paragraph Left",
          value: "normal",
          blockEditor: {
            render: leftRender,
          },
        },
        {
          title: "Paragraph Center",
          value: "center",
          blockEditor: {
            render: centerRender,
          },
        },
        {
          title: "Paragraph Right",
          value: "right",
          blockEditor: {
            render: rightRender,
          },
        },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        {
          title: "H1 - Center",
          value: "h1Center",
          blockEditor: {
            render: h1Render,
          },
        },
        {
          title: "H2 - Center",
          value: "h2Center",
          blockEditor: {
            render: h2Render,
          },
        },
        {
          title: "H3 - Center",
          value: "h3Center",
          blockEditor: {
            render: h3Render,
          },
        },
        {
          title: "H4 - Center",
          value: "h4Center",
          blockEditor: {
            render: h4Render,
          },
        },
        {
          title: "H5 - Center",
          value: "h5Center",
          blockEditor: {
            render: h5Render,
          },
        },
      ],
      lists: [{ title: "Numbered", value: "number" }],
    },
    {
      title: "Code",
      type: "code",
      options: {
        language: "html",
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      name: "quote",
      title: "Quote",
      type: "object",
      fields: [
        {
          name: "option",
          title: "1 / 2",
          type: "boolean",
          initialValue: false,
        },
        {
          name: "content",
          title: "Content",
          type: "blockQuote",
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Quote",
          };
        },
      },
    },
    {
      title: "Image",
      name: "img",
      type: "object",
      fields: [
        {
          title: "Image",
          name: "image",
          type: "image",
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
        {
          title: "Normal / Wide",
          name: "option",
          type: "boolean",
          initialValue: false,
        },
      ],
    },
    {
      title: "Leaf Image",
      name: "leafImg",
      type: "image",
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
      name: "video",
      type: "videoComponent",
      title: "Video Module",
    },
  ],
};
