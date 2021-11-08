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

export default {
  title: 'Block Content White',
  name: 'blockWhite',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }],
        annotations: [],
      },
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      name: 'quote',
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
            title: "Quote"
          }
        }
      }
    },
    // {
    //   title: 'Image',
    //   name: 'img',
    //   type: 'object',
    //   fields: [
    //     {
    //       title: 'Image',
    //       name: 'image',
    //       type: 'image',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       title: 'Description',
    //       name: 'name',
    //       type: 'string',
    //     },
    //   ],
    // },
  ],
}
