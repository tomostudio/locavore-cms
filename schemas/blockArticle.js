import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { BiColorFill, BiFont, BiFontSize } from 'react-icons/bi'
import { AiOutlineBgColors, AiOutlineFontSize } from 'react-icons/ai'
import { RiSubscript2, RiSuperscript2 } from 'react-icons/ri'

const subRender = (props) => <sub>{props.children}</sub>

const supRender = (props) => <sup>{props.children}</sup>

const largeRender = (props) => (
  <span style={{ fontSize: '1.5em' }}>{props.children}</span>
)

const centerRender = (props) => (
  <p style={{ textAlign: 'center' }}>{props.children}</p>
)

const leftRender = (props) => (
  <p style={{ textAlign: 'left' }}>{props.children}</p>
)

const rightRender = (props) => (
  <p style={{ textAlign: 'right' }}>{props.children}</p>
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

const linkRender = (props) => (
  <span>
    {props.children}
    <FiExternalLink />
  </span>
)

const colorRender = (props) => (
  <span>
    {props.children}
    <AiOutlineFontSize />
  </span>
)

const bgRender = (props) => (
  <span>
    {props.children}
    <AiOutlineBgColors />
  </span>
)

const fsizeRender = (props) => (
  <span>
    {props.children}
    <AiOutlineBgColors />
  </span>
)

const fontRender = (props) => (
  <span>
    {props.children}
    <BiFont />
  </span>
)

export default {
  title: 'Block Content Article',
  name: 'blockArticle',
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
          {
            title: 'Subscript',
            value: 'sub',
            blockEditor: {
              icon: () => <RiSubscript2 />,
              render: subRender,
            },
          },
          {
            title: 'Superscript',
            value: 'sup',
            blockEditor: {
              icon: () => <RiSuperscript2 />,
              render: supRender,
            },
          },
          {
            title: 'Larger Size',
            value: 'largerSize',
            blockEditor: {
              icon: () => <BiFontSize />,
              render: largeRender,
            },
          },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'link',
            blockEditor: {
              icon: () => <FiExternalLink />,
              render: linkRender,
            },
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
          {
            title: 'Change Color',
            name: 'changeColor',
            type: 'object',
            blockEditor: {
              icon: () => <BiColorFill />,
              render: colorRender,
            },
            fields: [
              {
                name: 'color',
                type: 'color',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
          {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'object',
            blockEditor: {
              icon: () => <AiOutlineBgColors />,
              render: bgRender,
            },
            fields: [
              {
                name: 'color',
                type: 'color',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
          {
            title: 'Change Font Size',
            name: 'fontSize',
            type: 'object',
            blockEditor: {
              icon: () => <AiOutlineFontSize />,
              render: fsizeRender,
            },
            fields: [
              {
                name: 'size',
                type: 'number',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
          {
            title: 'Font',
            name: 'font',
            type: 'object',
            blockEditor: {
              icon: () => <BiFont />,
              render: fontRender,
            },
            fields: [
              {
                name: 'type',
                type: 'string',
                validation: (Rule) => Rule.required(),
                options: {
                  list: [
                    { title: 'Serif', value: 'font-serif' },
                    { title: 'Sans', value: 'font-sans' },
                    { title: 'Display', value: 'display' },
                  ],
                },
                initialValue: 'font-serif',
              },
            ],
          },
        ],
      },
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        {
          title: 'H1 - Center',
          value: 'h1Center',
          blockEditor: {
            render: h1Render,
          },
        },
        {
          title: 'H2 - Center',
          value: 'h2Center',
          blockEditor: {
            render: h2Render,
          },
        },
        {
          title: 'H3 - Center',
          value: 'h3Center',
          blockEditor: {
            render: h3Render,
          },
        },
        {
          title: 'H4 - Center',
          value: 'h4Center',
          blockEditor: {
            render: h4Render,
          },
        },
        {
          title: 'H5 - Center',
          value: 'h5Center',
          blockEditor: {
            render: h5Render,
          },
        },
        {
          title: 'Paragraph Center',
          value: 'center',
          blockEditor: {
            render: centerRender,
          },
        },
        {
          title: 'Paragraph Left',
          value: 'left',
          blockEditor: {
            render: leftRender,
          },
        },
        {
          title: 'Paragraph Right',
          value: 'right',
          blockEditor: {
            render: rightRender,
          },
        },
      ],
      lists: [{ title: 'Numbered', value: 'number' }],
    },
    {
      title: 'Code',
      type: 'code',
      options: {
        language: 'html',
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      title: 'Line Spacer',
      name: 'lineSpacer',
      type: 'object',
      fields: [
        {
          title: 'Spacer',
          name: 'spacer',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Line Spacer',
          }
        },
      },
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'object',
      fields: [
        {
          name: 'option',
          title: '1 / 2',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'content',
          title: 'Content',
          type: 'blockQuote',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Quote',
          }
        },
      },
    },
    {
      title: 'Column Block',
      name: 'columnBlock',
      type: 'object',
      fields: [
        {
          name: 'padding',
          title: 'Normal / Wide',
          type: 'boolean',
          initialValue: false,
        },
        {
          title: 'Left',
          name: 'left',
          type: 'object',
          fields: [
            {
              name: 'columnLeft',
              title: 'Column Left',
              type: 'string',
              options: {
                list: [
                  { title: 'Blank', value: 'blank' },
                  { title: 'Block', value: 'block' },
                  { title: 'Image', value: 'image' },
                ],
              },
              validation: (Rule) => Rule.required(),
              initialValue: 'block',
            },
            {
              name: 'blockLeft',
              type: 'blockContent',
              title: 'Column Block Left',
              hidden: ({ parent }) => !(parent?.columnLeft === 'block'),
            },
            {
              title: 'Image Left',
              name: 'imageLeft',
              type: 'image',
              fields: [
                {
                  title: 'Edit Alt Text',
                  name: 'name',
                  type: 'string',
                  initialValue: 'Locavore NXT',
                },
              ],
              hidden: ({ parent }) => !(parent?.columnLeft === 'image'),
            },
          ],
        },
        {
          title: 'Right',
          name: 'right',
          type: 'object',
          fields: [
            {
              name: 'columnRight',
              title: 'Column Right',
              type: 'string',
              options: {
                list: [
                  { title: 'Block', value: 'block' },
                  { title: 'Image', value: 'image' },
                ],
              },
              validation: (Rule) => Rule.required(),
              initialValue: 'block',
            },
            {
              name: 'blockRight',
              type: 'blockContent',
              title: 'Column Block Right',
              hidden: ({ parent }) => !(parent?.columnRight === 'block'),
            },
            {
              title: 'Image Right',
              name: 'imageRight',
              type: 'image',
              fields: [
                {
                  title: 'Edit Alt Text',
                  name: 'name',
                  type: 'string',
                  initialValue: 'Locavore NXT',
                },
              ],
              hidden: ({ parent }) => !(parent?.columnRight === 'image'),
            },
          ],
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Column Block',
          }
        },
      },
    },
    {
      title: 'Image',
      name: 'img',
      type: 'object',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
              initialValue: 'Locavore NXT',
            },
          ],
        },
        {
          title: 'Caption',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Normal / Wide',
          name: 'option',
          type: 'boolean',
          initialValue: false,
        },
      ],
    },
    {
      name: 'video',
      type: 'videoComponent',
      title: 'Video Module',
    },
  ],
}
