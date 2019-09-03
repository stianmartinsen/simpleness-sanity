import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'
import logo from '../img/simpleness-logo.gif'

import styles from './header.module.css'

const Header = ({onHideNav, onShowNav, showNav}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
          <img src={logo} alt='Simpleness Logo' />
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/prosjekter'>Prosjekter</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
