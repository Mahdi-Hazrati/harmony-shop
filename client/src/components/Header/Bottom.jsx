import React from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import "./Bottom.scss"
const Bottom = () => {
  return (
    <div className="header-bottom">
      <DropdownMenu title="تمام محصولات">
        <li>محصول شماره یک</li>
        <li>محصول شماره دو</li>
        <li>محصول شماره سه</li>
        <li>محصول شماره چهار</li>
        <li>محصول شماره پنج</li>
        <a href="/dashboard">برو به داشبورد</a>
      </DropdownMenu>
      <DropdownMenu title="گوشی">
        <li>محصول شماره یک</li>
        <li>محصول شماره دو</li>
        <li>محصول شماره سه</li>
        <li>محصول شماره چهار</li>
        <li>محصول شماره پنج</li>
      </DropdownMenu>
      <DropdownMenu title="لپ تاپ">
        <li>محصول شماره یک</li>
        <li>محصول شماره دو</li>
        <li>محصول شماره سه</li>
        <li>محصول شماره چهار</li>
        <li>محصول شماره پنج</li>
      </DropdownMenu>
      <DropdownMenu title="لوازم جانبی">
        <li>محصول شماره یک</li>
        <li>محصول شماره دو</li>
        <li>محصول شماره سه</li>
        <li>محصول شماره چهار</li>
        <li>محصول شماره پنج</li>
      </DropdownMenu>
    </div>
  )
}

export default Bottom