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
import { RiSubscript2, RiSuperscript2 } from 'react-icons/ri'
import { AiOutlineFontSize } from 'react-icons/ai'
import { BiColorFill } from 'react-icons/bi'

const subRender = (props) => <sub>{props.children}</sub>

const supRender = (props) => <sup>{props.children}</sup>

const fsizeRender = (props) => (
  <span>
    {props.children}
    <AiOutlineFontSize />
  </span>
)

const colorRender = (props) => (
  <span>
    {props.children}
    <BiColorFill />
  </span>
)

export default {
  title: 'Block Cover',
  name: 'blockCover',
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
          title: 'Normal',
          value: 'normal',
        },
      ],
      lists: [],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
  ],
}
