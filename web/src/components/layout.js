import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteData}) => (
  <>
    <Header siteTitle={siteData.siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}

          <a href='https://www.gatsbyjs.org'>Gatsby</a>

          {JSON.stringify(siteData)}

        </div>
      </div>
    </footer>
  </>
)

export default Layout
