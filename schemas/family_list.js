import React from 'react'

// Important items to allow form fields to work properly and patch the dataset.
import {PatchEvent, set} from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

// Import the TextArea from UI
import { TextArea } from '@sanity/ui'

const inputWithHeight = React.forwardRef((props, ref) => {
  const { type, onChange } = props
  return(
    <FormField label={type.title} description={type.description}>
      <TextArea
        ref={ref}
        placeholder={type.placeholder}
        value={props.value}
        onChange={event => {onChange(PatchEvent.from(set(event.target.value)))}}
        style={{ height: "60px" }}
      /> 
    </FormField>
  )

})

export default {
  name: 'family_list',
  title: 'Family List',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((slug) => {
          const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
          if (slug.current.match(regex) !== null) {
            return true
          } else {
            return 'Not a valid slug'
          }
        }),
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          type: 'string',
          title: 'Keywords',
        },
        {
          name: 'seo_image',
          title: 'Image',
          description: '800 x 600 | PNG / JPEG / WEBP | max 100kb',
          type: 'image',
          fields: [
            {
              title: 'Edit Alt Text',
              name: 'name',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'member',
      title: 'Member',
      type: 'array',
      of: [
        {
          name: 'memberImage',
          title: 'Image',
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Position',
              name: 'position',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'name',
          type: 'string',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      inputComponent: inputWithHeight,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'url',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Color',
      name: 'bgColor',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
}
