export default {
  name: "menuComponent",
  title: "Menu Module",
  type: "array",
  of: [
    {
      name: "editor",
      title: "Editor Frame Module",
      type: "object",
      fields: [
        {
          name: "content",
          title: "Content",
          type: "blockMenu",
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Editor Frame",
          };
        },
      },
    },
    {
      name: "video",
      type: "videoComponent",
      title: "Video Module",
      preview: {
        prepare() {
          return {
            title: "Video Module",
          };
        },
      },
    },
    {
      name: "imageComponent",
      title: "Image Module",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          fields: [
            {
              title: "Edit Alt Text",
              name: "name",
              type: "string",
              initialValue: "Locavore NXT",
            },
          ],
        },
        {
          title: "Caption",
          name: "description",
          type: "string",
        },
        {
          title: "Normal / Wide",
          name: "option",
          type: "boolean",
          initialValue: false,
        },
      ],
      preview: {
        select: {
          media: "image",
        },
        prepare(selection) {
          const { media } = selection;
          return {
            title: "Image Module",
            media: media,
          };
        },
      },
    },
    {
      name: "gallery",
      title: "Gallery Module",
      type: "object",
      fields: [
        {
          name: "gallery",
          title: "Gallery Component",
          type: "array",
          of: [
            {
              name: "twoImage",
              title: "Two Image",
              type: "object",
              fields: [
                {
                  name: "firstImage",
                  title: "First Image",
                  type: "object",
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      fields: [
                        {
                          title: "Edit Alt Text",
                          name: "name",
                          type: "string",
                          initialValue: "Locavore NXT",
                        },
                      ],
                    },
                    {
                      name: "caption",
                      title: "Caption",
                      type: "string",
                    },
                  ],
                },
                {
                  name: "secondImage",
                  title: "Second Image",
                  type: "object",
                  fields: [
                    {
                      name: "image",
                      title: "Image",
                      type: "image",
                      fields: [
                        {
                          title: "Edit Alt Text",
                          name: "name",
                          type: "string",
                          initialValue: "Locavore NXT",
                        },
                      ],
                    },
                    {
                      name: "caption",
                      title: "Caption",
                      type: "string",
                    },
                  ],
                },
              ],
              preview: {
                prepare() {
                  return {
                    title: "Two Image",
                  };
                },
              },
            },
            {
              name: "singleImage",
              title: "Single Image",
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  fields: [
                    {
                      title: "Edit Alt Text",
                      name: "name",
                      type: "string",
                      initialValue: "Locavore NXT",
                    },
                  ],
                },
                {
                  name: "caption",
                  title: "Caption",
                  type: "string",
                },
              ],
              preview: {
                prepare() {
                  return {
                    title: "Single Image",
                  };
                },
              },
            },
          ],
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Gallery Module",
          };
        },
      },
    },
  ],
};
