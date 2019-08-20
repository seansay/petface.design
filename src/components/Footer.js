import React from 'react'
// import { Link } from 'gatsby'

import logo from '../img/logo.jpg'

const Footer = class extends React.Component {
  render() {

    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Petface logo"
            style={{ width: '14em' }}
          />
        </div>

        <div className="content has-text-centered">
          <p>email: <a href="mailto:petface@163.com">petface@163.com</a></p>
          <p>web design and dev by <a href="https://notimportant.org/">Li Song</a></p>
          <p>© 2019, all rights reserved 皮特飞丝声音工作室</p>
        </div>
      </footer>
    )
  }
}

export default Footer
