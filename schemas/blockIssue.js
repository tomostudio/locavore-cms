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
      },
      styles: [
        { title: 'Normal', value: 'normal' },
      ],
      lists: [],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
  ],
}
