import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiFont } from 'react-icons/bi'

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

const normalRender = (props) => (
  <p style={{ textAlign: 'center' }}>{props.children}</p>
)

const h1Render = (props) => (
  <h1 style={{ textAlign: 'center' }}>{props.children}</h1>
)

const h2Render = (props) => (
  <h2 style={{ textAlign: 'center' }}>{props.children}</h2>
)

const h3Render = (props) => (
  <h3 style={{ textAlign: 'center' }}>{props.children}</h3>
)

const h4Render = (props) => (
  <h4 style={{ textAlign: 'center' }}>{props.children}</h4>
)

const h5Render = (props) => (
  <h5 style={{ textAlign: 'center' }}>{props.children}</h5>
)

const fontRender = (props) => (
  <span>
    {props.children} <BiFont />
  </span>
)

export default {
  title: 'Block Column',
  name: 'blockColumn',
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
                    { title: 'Default', value: 'font-default' },
                  ],
                  layout: 'radio',
                },
                initialValue: 'font-default',
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
          title: 'H1',
          value: 'h1',
          blockEditor: {
            render: h1Render,
          },
        },
        {
          title: 'H2',
          value: 'h2',
          blockEditor: {
            render: h2Render,
          },
        },
        {
          title: 'H3',
          value: 'h3',
          blockEditor: {
            render: h3Render,
          },
        },
        {
          title: 'H4',
          value: 'h4',
          blockEditor: {
            render: h4Render,
          },
        },
        {
          title: 'H5',
          value: 'h5',
          blockEditor: {
            render: h5Render,
          },
        },
      ],
      lists: [],
    },
    {
      title: 'Line Divider',
      name: 'lineDivider',
      type: 'object',
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
  ],
}
