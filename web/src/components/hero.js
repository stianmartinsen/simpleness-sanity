import React from 'react'

import styles from './hero.module.css'
import Container from '../components/container'
import BlockText from './block-text'

function Hero ({_rawHeroContent}) {
  return (
    <div className={styles.root}>
      <Container>
        <BlockText blocks={_rawHeroContent} />
      </Container>
    </div>
  )
}

export default Hero
