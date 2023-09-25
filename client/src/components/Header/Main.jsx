import React from 'react'
import logo_image from "../../assets/images/harmony-shop-logo.svg"
import { AiOutlineSearch, AiOutlineShopping, AiOutlineUser } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import "./Main.scss"
const Main = () => {
  return (
    <div className="header-main">
      <div className="brand">
        <img src={logo_image} alt="harmony shop logo" className="brand-logo" />
        <span className="brand-title">هارمونی شاپ</span>
      </div>
      <div className="search-box">
        <input type="text" className="search-box-input" />
        <AiOutlineSearch className="search-box-icon" />
      </div>
      <div className="user-account">
        <div className="right">
          <AiOutlineUser className="icon" />
        </div>
        <div className="center">
          <span className="hi-message">سلام!</span>
          <span className="username">مهدی حضرتی</span>
        </div>
        <div className="left">
          <IoIosArrowDown className="icon" />

        </div>

      </div>
      <div className="shopping-cart">
        <AiOutlineShopping className="icon" />
        <div className="counter">5</div>
      </div>

    </div>
  )
}

export default Main