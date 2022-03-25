import React from 'react'

// Important items to allow form fields to work properly and patch the dataset.
import { PatchEvent, set } from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'

// Import the TextArea from UI
import { TextArea } from '@sanity/ui'

const inputWithHeight = React.forwardRef((props, ref) => {
  const { type, onChange } = props
  return (
    <FormField label={type.title} description={type.description}>
      <TextArea
        ref={ref}
        placeholder={type.placeholder}
        value={props.value}
        onChange={(event) => {
          onChange(PatchEvent.from(set(event.target.value)))
        }}
        style={{ height: '60px' }}
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
      title: 'Family Title',
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
          if (slug) {
            if (slug.current.match(regex) !== null) {
              return true
            } else {
              return 'Not a valid slug'
            }
          } else {
            return 'Required'
          }
        }),
    },
    {
      title: 'SEO',
      description: 'Search Engine Optimization allows to improve the ranking in search results.',
      name: 'seo',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'seo_description',
          description: 'Enter up to 400 characters to describe this family',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'seo_keywords',
          description: 'Enter some keywords to describe this family (separated by commas)',
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
              initialValue: 'Locavore NXT',
            },
          ],
        },
      ],
    },
    {
      name: 'logo',
      description: 'PNG/WEBP (Recommended Dimension # x #)',
      title: 'Logo',
      type: 'image',
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
      name: 'description',
      title: 'Family Description',
      type: 'blockIssue',
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
      name: 'disableInfo',
      title: 'Disable Info Text',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'infoText',
      title: 'Info Text',
      type: 'blockCover',
      hidden: ({ parent }) => !(parent?.disableInfo === false),
    },
    {
      name: 'mapLink',
      description: 'Please use Google Map to retrieve the link',
      title: 'Map Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'waLink',
      title: 'WhatsApp Link',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'disableInstagram',
      title: 'Disable Instagram Embed',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Instagram Embed Code (Elfsight)',
      name: 'elfsightCode',
      type: 'string',
      hidden: ({ parent }) => !(parent?.disableInstagram === false),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'object',
      hidden: ({ parent }) => !(parent?.disableInstagram === false),
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
      name: 'disableButton',
      title: 'Disable Button',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      hidden: ({ parent }) => !(parent?.disableButton === false),
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) =>
            Rule.custom((field, context) => {
              if (context.document.disableButton === false) {
                return !field ? 'Required' : true
              } else {
                return true
              }
            }),
        },
        {
          name: 'link',
          title: 'Link',
          type: 'url',
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
  orderings: [
    {
      title: 'Order',
      name: 'orderDsc',
      by: [{ field: 'order', direction: 'desc' }],
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
}
