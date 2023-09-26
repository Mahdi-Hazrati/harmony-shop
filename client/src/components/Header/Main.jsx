import React from 'react'
import { Link } from "react-router-dom"
import logo_image from "../../assets/images/harmony-shop-logo.svg"
import { AiOutlineSearch, AiOutlineShopping, AiOutlineUser } from "react-icons/ai"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"
import { IoIosArrowDown } from "react-icons/io"
import "./Main.scss"
const Main = () => {
  return (
    <div className="header-main">
      <Link to={"/"}>
        <div className="brand-container">
          <img src={logo_image} alt="harmony shop logo" className="brand-logo" />
          <span className="brand-title">فروشگاه<br /> هارمونی</span>
        </div>
      </Link>
      <div className="search-box">
        <input type="text" className="search-box-input" placeholder="محصول مورد نظر را جست و جو کنید ..." />
        <AiOutlineSearch className="search-box-icon" />
      </div>
      <div className="user-account">
          <AiOutlineUser className="user-icon" />
        <div className="username-container">
          <span className="hi-message">سلام!</span>
          <span className="username">مهدی حضرتی</span>
        </div>
        <div className="vertical-line-sm"></div>
        <DropdownMenu title={"حساب کاربری"} className="dropdown-menu">
          <li>حساب کاربری</li>
          <li>تاریخچه خرید</li>
          <li>خروج از حساب کاربری</li>
        </DropdownMenu>
      </div>
      <div className="shopping-cart">
        <AiOutlineShopping className="icon" />
        <div className="counter">5</div>
      </div>

    </div>
  )
}

export default Main