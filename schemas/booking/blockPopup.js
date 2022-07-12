import React from 'react'
import { FiExternalLink, FiMail } from 'react-icons/fi'
import { AiOutlineMinus, AiOutlineWhatsApp } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'

const linkRender = (props) => (
  <span>
    {props.children} <FiExternalLink />
  </span>
)

const walinkRender = (props) => (
  <span>
    <AiOutlineWhatsApp /> WhatsApp {props.children}
  </span>
)

const emailRender = (props) => (
  <span>
    {props.children} <FiMail />
  </span>
)

const normalRender = (props) => (
  <p style={{ textAlign: 'center' }}>{props.children}</p>
)

export default {
  title: 'Block Popup',
  name: 'blockPopup',
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
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
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
            name: 'wa_link',
            type: 'object',
            title: 'Wa Link',
            blockEditor: {
              icon: () => <AiOutlineWhatsApp />,
              render: walinkRender,
            },
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
          {
            name: 'mail',
            type: 'object',
            title: 'Email',
            blockEditor: {
              icon: () => <FiMail />,
              render: emailRender,
            },
            fields: [
              {
                name: 'content',
                type: 'email',
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
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
      ],
      lists: [],
    },
    {
      title: 'Button',
      name: 'button',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Url',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Line Divider',
      name: 'lineDivider',
      type: 'object',
      icon: AiOutlineMinus,
      fields: [
        {
          title: 'Line',
          name: 'spacer',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Line Divider',
          }
        },
      },
    },
    {
      title: 'Dot Divider',
      name: 'dotDivider',
      type: 'object',
      icon: GoPrimitiveDot,
      fields: [
        {
          title: 'Dot',
          name: 'spacer',
          type: 'boolean',
          readOnly: true,
          initialValue: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Dot Divider',
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
          title: 'Left',
          name: 'left',
          type: 'object',
          fields: [
            {
              title: 'Editor',
              name: 'editor',
              type: 'blockColumn',
            },
          ],
        },
        {
          title: 'Right',
          name: 'right',
          type: 'object',
          fields: [
            {
              title: 'Editor',
              name: 'editor',
              type: 'blockColumn',
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
      name: 'image',
      type: 'image',
      fields: [
        {
          title: 'Edit Alt Text',
          name: 'alt',
          type: 'string',
          initialValue: 'Locavore NXT',
        },
      ],
    },
  ],
}
