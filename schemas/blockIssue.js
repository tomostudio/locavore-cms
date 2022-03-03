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

const subIcon = () => <span style={{ fontWeight: 'bold' }}>Sub</span>

const subRender = (props) => <sub>{props.children}</sub>

const supIcon = () => <span style={{ fontWeight: 'bold' }}>Sup</span>

const supRender = (props) => <sup>{props.children}</sup>

const normalRender = (props) => (
  <p style={{ textAlign: 'center' }}>{props.children}</p>
)

const leftIcon = () => <span style={{ fontWeight: 'bold' }}>Left</span>

const leftRender = (props) => (
  <p style={{ textAlign: 'left' }}>{props.children}</p>
)

const rightIcon = () => <span style={{ fontWeight: 'bold' }}>Right</span>

const rightRender = (props) => (
  <p style={{ textAlign: 'right' }}>{props.children}</p>
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
              icon: subIcon,
              render: subRender,
            },
          },
          {
            title: 'Superscript',
            value: 'sup',
            blockEditor: {
              icon: supIcon,
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
              icon: () => 'Color',
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
              icon: () => 'FSize',
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
