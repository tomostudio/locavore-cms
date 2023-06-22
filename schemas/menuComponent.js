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
      type: "object",
      title: "Video Module",
      fields: [
        {
          name: "showTitle",
          title: "Show Title",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) =>
            Rule.required().custom((field, context) => {
              if (field) {
                if (
                  context.document.blog
                    .filter((item) => item._type === "editor")
                    .filter(
                      (data) =>
                        data.title &&
                        data.title
                          .toLowerCase()
                          .replace(/^\s+|\s+$/g, "")
                          .replace(/[^a-z0-9 -]/g, "")
                          .replace(/\s+/g, "-")
                          .replace(/-+/g, "-")
                          .replace(/^-+/, "")
                          .replace(/-+$/, "") ===
                          field
                            .toLowerCase()
                            .replace(/^\s+|\s+$/g, "")
                            .replace(/[^a-z0-9 -]/g, "")
                            .replace(/\s+/g, "-")
                            .replace(/-+/g, "-")
                            .replace(/^-+/, "")
                            .replace(/-+$/, "")
                    ).length > 0 ||
                  context.document.blog
                    .filter((item) => item._type === "imageComponent")
                    .filter(
                      (data) =>
                        data.title &&
                        data.title
                          .toLowerCase()
                          .replace(/^\s+|\s+$/g, "")
                          .replace(/[^a-z0-9 -]/g, "")
                          .replace(/\s+/g, "-")
                          .replace(/-+/g, "-")
                          .replace(/^-+/, "")
                          .replace(/-+$/, "") ===
                          field
                            .toLowerCase()
                            .replace(/^\s+|\s+$/g, "")
                            .replace(/[^a-z0-9 -]/g, "")
                            .replace(/\s+/g, "-")
                            .replace(/-+/g, "-")
                            .replace(/^-+/, "")
                            .replace(/-+$/, "")
                    ).length > 0 ||
                  context.document.blog
                    .filter((item) => item._type === "gallery")
                    .filter(
                      (data) =>
                        data.title &&
                        data.title
                          .toLowerCase()
                          .replace(/^\s+|\s+$/g, "")
                          .replace(/[^a-z0-9 -]/g, "")
                          .replace(/\s+/g, "-")
                          .replace(/-+/g, "-")
                          .replace(/^-+/, "")
                          .replace(/-+$/, "") ===
                          field
                            .toLowerCase()
                            .replace(/^\s+|\s+$/g, "")
                            .replace(/[^a-z0-9 -]/g, "")
                            .replace(/\s+/g, "-")
                            .replace(/-+/g, "-")
                            .replace(/^-+/, "")
                            .replace(/-+$/, "")
                    ).length > 0 ||
                  context.document.blog
                    .filter((item) => item._type === "video")
                    .filter(
                      (data) =>
                        data.title &&
                        data.title
                          .toLowerCase()
                          .replace(/^\s+|\s+$/g, "")
                          .replace(/[^a-z0-9 -]/g, "")
                          .replace(/\s+/g, "-")
                          .replace(/-+/g, "-")
                          .replace(/^-+/, "")
                          .replace(/-+$/, "") ===
                          field
                            .toLowerCase()
                            .replace(/^\s+|\s+$/g, "")
                            .replace(/[^a-z0-9 -]/g, "")
                            .replace(/\s+/g, "-")
                            .replace(/-+/g, "-")
                            .replace(/^-+/, "")
                            .replace(/-+$/, "")
                    ).length > 1
                ) {
                  return "Title must be unique";
                } else {
                  return true;
                }
              } else {
                return true;
              }
            }),
        },
        {
          name: "video",
          type: "videoComponent",
          title: "Video Component",
        },
      ],
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
