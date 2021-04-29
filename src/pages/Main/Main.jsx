import React from 'react'
import "./Main.scss"

import Logo from './../../assets/img/logo-square.png'

const Main = () => {
    return (
        <div className="Main-wrapper">
          <div className="Main-header">
              <div className="Main-header-img">
                  <img src={Logo} alt="logo Elo Group Quadrado"/>
              </div>
              <div className="Main-header-text">
                  <p>Matheus Toscano</p>
                  <small>Cargo na empresa</small>
              </div>
          </div>
          <div className="Main-container">
              <div className="Main-container-btn">novo lead &#8853;</div>
          </div>
        </div>
    )
}

export default Main
