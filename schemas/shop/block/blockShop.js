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
          { title: "Underline", value: "underline" }
        ],
        annotations: [],
      },
      styles: [],
      lists: [],
    }
  ],
};
