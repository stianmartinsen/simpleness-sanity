import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Ikke funnet' />

    <Container>
      <p>Å nei!</p>
      <h1>Siden ble ikke funnet</h1>
      <p>Kanskje du finner det du leter etter <a href="/">på forsiden</a>?</p>
    </Container>
  </Layout>
)

export default NotFoundPage
