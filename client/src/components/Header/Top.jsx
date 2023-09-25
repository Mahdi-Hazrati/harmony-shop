import React from 'react'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"
import iran_flag_image from "../../assets/images/circle-flag-of-iran.png"
import "./Top.scss"
const Top = () => {
  return (
    <div className="header-top">
    <div className="left">
            <div className="item">
                <span>support@harmony.shop</span>
                <AiOutlineMail className="icon" />
            </div>

            <div className="vertical-line-sm"></div>

            <div className="item">
                <span>(+98) 912 212 1212</span>
                <AiOutlinePhone className="icon" />
            </div>
        </div>
        <div className="right">
            <div className="item">
                <span>تماس با ما</span>
            </div>

            <div className="vertical-line-sm"></div>

            <div className="item">
                <span>سیاست و حریم خصوصی</span>
            </div>

            <div className="vertical-line-sm"></div>

            <div className="item">
                <span>سوالات متداول</span>
            </div>

            <div className="vertical-line-sm"></div>
            
            <div className="item">
                <img src={iran_flag_image} alt="iran-circle-flag" className="flag-icon" />
                <span>فارسی</span>
            </div>
        </div>

    </div>
  )
}

export default Top