import client from 'part:@sanity/base/client'

let editorMap = new Map();

const fetchDocuments = async () => {
  const editors = await client.fetch(`*[_type == "issue"]{ _id, slug }`)
  editors.forEach(editor => editorMap.set(editor._id, editor.slug.current));
};

/* Run this once on load */
fetchDocuments();

// ./resolveProductionUrl.js
export default function resolveProductionUrl(article) {
  if (!article._type === "article") return null;
  if (!article.issue) return null;
  const editorSlug = editorMap.get(article.issue._ref);
  if (!editorSlug) return null;
  return `https://locavorenext.com/editorial/preview/${editorSlug}/${article.slug.current}`
}