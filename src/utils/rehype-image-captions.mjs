import { visit } from 'unist-util-visit';

// Markdown `![alt](src)` on its own line becomes `<p><img alt="..."></p>`.
// Since this site's convention is that alt text doubles as a caption,
// promote that paragraph to `<figure><img><figcaption>alt</figcaption></figure>`.
export function rehypeImageCaptions() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'p' || !parent || index === null) return;

      const children = node.children.filter(
        (child) => child.type === 'element' || (child.type === 'text' && child.value.trim() !== '')
      );
      if (children.length !== 1 || children[0].tagName !== 'img') return;

      const img = children[0];
      const alt = img.properties?.alt;
      if (!alt) return;

      const figure = {
        type: 'element',
        tagName: 'figure',
        properties: {},
        children: [
          img,
          {
            type: 'element',
            tagName: 'figcaption',
            properties: {},
            children: [{ type: 'text', value: alt }],
          },
        ],
      };

      parent.children[index] = figure;
    });
  };
}
