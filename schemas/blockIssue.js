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
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { BiColorFill, BiFont } from 'react-icons/bi'
import { AiOutlineBgColors, AiOutlineFontSize } from 'react-icons/ai'
import { RiSubscript2, RiSuperscript2 } from 'react-icons/ri'

const subRender = (props) => <sub>{props.children}</sub>

const supIcon = () => <span style={{ fontWeight: 'bold' }}>Sup</span>

const supRender = (props) => <sup>{props.children}</sup>

const normalRender = (props) => (
  <p style={{ textAlign: 'center' }}>{props.children}</p>
)

const leftRender = (props) => (
  <p style={{ textAlign: 'left' }}>{props.children}</p>
)

const rightRender = (props) => (
  <p style={{ textAlign: 'right' }}>{props.children}</p>
)

const linkRender = (props) => (
  <span>
    {props.children}
    <FiExternalLink />
  </span>
)

const fontRender = (props) => (
  <span>
    {props.children}
    <BiFont />
  </span>
)

const colorRender = (props) => (
  <span>
    {props.children}
    <AiOutlineFontSize />
  </span>
)

const fsizeRender = (props) => (
  <span>
    {props.children}
    <AiOutlineBgColors />
  </span>
)

export default {
  title: 'Block Issue',
  name: 'blockIssue',
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
                type: 'url'
              }
            ]
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
          title: 'Left',
          value: 'left',
          blockEditor: {
            icon: () => "Left",
            render: leftRender,
          },
        },
        {
          title: 'Right',
          value: 'right',
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
  ],
}
