import React from 'react'

import { FormField } from '@sanity/base/components'
import { TextArea } from '@sanity/ui'

import { useId } from '@reach/auto-id' // hook to generate unique IDs
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'

const inputWithHeight = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    placeholder, // Placeholder text from the schema
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange, // Method to handle patch events
  } = props

  // Creates a unique ID for our input
  const inputId = useId()

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = event.currentTarget.value // get current value
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
    },
    [onChange],
  )

  return (
    <FormField
      description={type.description} // Creates description from schema
      title={type.title} // Creates label from schema title
      __unstable_markers={markers} // Handles all markers including validation
      __unstable_presence={presence} // Handles presence avatars
      compareValue={compareValue} // Handles "edited" status
      inputId={inputId} // Allows the label to connect to the input field
    >
      <TextArea
        id={inputId} // A unique ID for this input
        onChange={handleChange} // A function to call when the input value changes
        value={value} // Current field value
        readOnly={readOnly} // If "readOnly" is defined make this field read only
        placeholder={placeholder} // If placeholder is defined, display placeholder text
        onFocus={onFocus} // Handles focus events
        onBlur={onBlur} // Handles blur events
        ref={ref}
        style={{ height: '200px' }}
      />
    </FormField>
  )
})

const subIcon = () => <span style={{ fontWeight: 'bold' }}>Sub</span>

const subRender = (props) => <sub>{props.children}</sub>

const supIcon = () => <span style={{ fontWeight: 'bold' }}>Sup</span>

const supRender = (props) => <sup>{props.children}</sup>

const largeIcon = () => <span style={{ fontWeight: 'bold' }}>Size+</span>

const largeRender = (props) => (
  <span style={{ fontSize: '22px' }}>{props.children}</span>
)

const centerIcon = () => <span style={{ fontWeight: 'bold' }}>Center</span>

const centerRender = (props) => (
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
  title: 'Block Content Orange',
  name: 'blockOrange',
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
          { title: 'Code', value: 'code' },
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
          {
            title: 'Center',
            value: 'center',
            blockEditor: {
              icon: centerIcon,
              render: centerRender,
            },
          },
          {
            title: 'Left',
            value: 'left',
            blockEditor: {
              icon: leftIcon,
              render: leftRender,
            },
          },
          {
            title: 'Right',
            value: 'right',
            blockEditor: {
              icon: rightIcon,
              render: rightRender,
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
          {
            name: 'link',
            type: 'object',
            title: 'link',
            fields: [
              {
                name: 'url',
                type: 'url',
                validation: (Rule) => Rule.required(),
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
      name: 'blockquote',
      title: 'Quote',
      type: 'object',
      fields: [
        {
          name: 'content',
          title: 'Content',
          type: 'string',
          inputComponent: inputWithHeight,
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
          title: 'Padding',
          type: "boolean",
          initialValue: true,
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
              title: 'Block Left',
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
              title: 'Block Right',
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
        },
        {
          title: 'Description',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Small / Full',
          name: 'option',
          type: 'boolean',
          initialValue: false,
        },
      ],
    },
  ],
}
