/**
 * To learn more about HTML Serializer check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/html-serializer
 */

import prismicDOM from 'prismic-dom'
import linkResolver from './link-resolver'

const Elements = prismicDOM.RichText.Elements
// eslint-disable-next-line
console.log(prismicDOM.RichText)

export default function(type, element, content, children) {
  // Generate links to Prismic Documents as <nuxt-link> components
  if (type === Elements.hyperlink) {
    let result = ''
    const url = prismicDOM.Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<nuxt-link to="${url}">${content}</nuxt-link>`
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener" style="text-decoration: none; color: #165fcf;"`
        : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <nuxt-link> component
  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${element.alt ||
      ''}" copyright="${element.copyright || ''}">`

    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === 'Document') {
        result = `<nuxt-link to="${url}">${result}</nuxt-link>`
      } else {
        const target = element.linkTo.target
          ? `target="${element.linkTo.target}" rel="noopener"`
          : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`
    return result
  }

  switch (type) {
    case Elements.heading1:
      return `<h1>${children.join('')}</h1>`

    case Elements.heading2:
      return `<h2>${children.join('')}</h2>`

    case Elements.heading3:
      return `<h3>${children.join('')}</h3>`

    case Elements.heading4:
      return `<h4>${children.join('')}</h4>`

    case Elements.heading5:
      return `<h5>${children.join('')}</h5>`

    case Elements.heading6:
      return `<h6>${children.join('')}</h6>`

    case Elements.paragraph:
      return `<p>${children.join('')}</p>`

    case Elements.preformatted:
      return `<pre>${children.join('')}</pre>`

    case Elements.strong:
      return `<strong>${children.join('')}</strong>`

    case Elements.em:
      return `<div style="display:inline-block;border-radius:2px;border:solid 1px rgba(28, 46, 54, 0.2);background-color:#f7f9fc;padding: 2px 3px 0px 3px;
"><em style="color:#e35d74;font-weight:normal;font-style:normal">${children.join(
        ''
      )}</em></div>`

    case Elements.listItem:
      return `<base-list-item>${children.join('')}</base-list-item>`

    case Elements.oListItem:
      return `<li>${children.join('')}</li>`

    case Elements.list:
      return `<base-list>${children.join('')}</base-list>`

    case Elements.oList:
      return `<ol>${children.join('')}</ol>`

    case Elements.embed:
      return `
        <div data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
        >
          ${element.oembed.html}
        </div>
      `

    case Elements.label:
      const label = element.data.label ? ` class="${element.data.label}"` : ''
      return `<span ${label}>${children.join('')}</span>`

    case Elements.span:
      return content ? content.replace(/\n/g, '<br />') : ''

    default:
      return null
  }
}
