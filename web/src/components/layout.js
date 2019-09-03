import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteData}) => (
  <>
    <Header onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>

    {siteData && (
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.siteInfo}>
            {siteData.socialMediaLinks.map((item, i) => (
              <a key={i} href={item.url} target="_blank">{item.title}</a>
            ))}

            {(siteData.contactEmail &&
              <a href={"mailto:" + siteData.contactEmail}>{siteData.contactEmail}</a>
            )}
          </div>
        </div>
      </footer>
    )}
  </>
)

export default Layout
