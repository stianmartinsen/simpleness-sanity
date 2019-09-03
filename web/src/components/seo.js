import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

function SEO ({description, lang, meta, keywords, title, bodyClass}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteTitle = (data.site && data.site.title) || ''
        return (
          <Helmet
            htmlAttributes={{lang}}
            title={title}
            titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
            bodyAttributes={{
              class: bodyClass
            }}
            meta={[
              {
                property: 'og:title',
                content: title
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:title',
                content: title
              }
            ]
            .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: {eq: "siteSettings"}) {
      title
    }
  }
`
