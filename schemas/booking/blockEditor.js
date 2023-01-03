import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import {HiAnnotation} from 'react-icons/hi'

const normalRender = (props) => (
  <p style={{ textAlign: 'center' }}>{props.children}</p>
)

const h1Render = (props) => (
  <h1 style={{ textAlign: 'center' }}>{props.children}</h1>
)

const h2Render = (props) => (
  <h2 style={{ textAlign: 'center' }}>{props.children}</h2>
)

const h3Render = (props) => (
  <h3 style={{ textAlign: 'center' }}>{props.children}</h3>
)

const h4Render = (props) => (
  <h4 style={{ textAlign: 'center' }}>{props.children}</h4>
)

const h5Render = (props) => (
  <h5 style={{ textAlign: 'center' }}>{props.children}</h5>
)

const annotationRender = (props) => (
  <span>
    {props.children}&nbsp;
    <HiAnnotation />
  </span>
);

export default {
  title: 'Block Editor',
  name: 'blockEditor',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Underline', value: 'underline' },
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
                initialValue: "font-display",
              },
            ]
          }
        ],
      },
      styles: [
        {
          title: 'Center',
          value: 'normal',
          blockEditor: {
            render: normalRender,
          },
        },
        {
          title: 'H1',
          value: 'h1',
          blockEditor: {
            render: h1Render,
          },
        },
        {
          title: 'H2',
          value: 'h2',
          blockEditor: {
            render: h2Render,
          },
        },
        {
          title: 'H3',
          value: 'h3',
          blockEditor: {
            render: h3Render,
          },
        },
        {
          title: 'H4',
          value: 'h4',
          blockEditor: {
            render: h4Render,
          },
        },
        {
          title: 'H5',
          value: 'h5',
          blockEditor: {
            render: h5Render,
          },
        },
      ],
      lists: [],
    },
    {
      title: 'Button',
      name: 'button',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Url',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Line Divider',
      name: 'lineDivider',
      type: 'object',
      icon: AiOutlineMinus,
      fields: [
        {
          title: 'Line',
          name: 'spacer',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Line Divider"
          }
        },
      },
    },
    {
      title: 'Dot Divider',
      name: 'dotDivider',
      type: 'object',
      icon: GoPrimitiveDot,
      fields: [
        {
          title: 'Dot',
          name: 'spacer',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Dot Divider',
          }
        },
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'alt',
          type: 'string',
          initialValue: 'Locavore NXT',
        },
      ],
    },
  ],
}
