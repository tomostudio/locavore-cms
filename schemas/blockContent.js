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

const largeIcon = () => <span style={{ fontWeight: 'bold' }}>Size+</span>

const largeRender = (props) => (
  <span style={{ fontSize: '22px' }}>{props.children}</span>
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

export default {
  title: 'Block Content',
  name: 'blockContent',
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
          {
            title: 'Larger Size',
            value: 'largerSize',
            blockEditor: {
              icon: largeIcon,
              render: largeRender,
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
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'object',
            blockEditor: {
              icon: () => 'BColor',
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
          {
            title: 'Font',
            name: 'font',
            type: 'object',
            blockEditor: {
              icon: () => 'Font',
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
          title: 'Center',
          value: 'center',
          blockEditor: {
            render: centerRender,
          },
        },
        {
          title: 'Left',
          value: 'left',
          blockEditor: {
            render: leftRender,
          },
        },
        {
          title: 'Right',
          value: 'right',
          blockEditor: {
            render: rightRender,
          },
        },
      ],
      lists: [{ title: 'Numbered', value: 'number' }],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
  ],
}
