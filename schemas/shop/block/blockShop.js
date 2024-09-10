import React from "react";
import { HiOutlineLink } from 'react-icons/hi'

const annotationRender = (props, icon) => (
  <span>
    {props.children}&nbsp;
    {icon}
    &nbsp;
  </span>
)

export default {
  title: "Block Shop Description",
  name: "blockShop",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Strike", value: "strike-through" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            blockEditor: {
              icon: () => <HiOutlineLink />,
              render: (props) => annotationRender(props, <HiOutlineLink />),
            },
            fields: [
              {
                title: "URL",
                name: "url",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto"],
                  }).required(),
              },
            ],
          },
        ],
      },
      styles: [],
      lists: [],
    },
  ],
};
