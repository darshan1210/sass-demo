import React from 'react'
import img from '../asets/img/logo.png'
import { FaFacebookF, FaTwitter, FaSkype } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import '../Styles/footer.scss'

function Footer () {
  return (
        <>
        <div className='footer'>
            <div className='footer_logo'>
                <div className='footer_logo_img'>
                    <img src={img} alt="" />
                </div>
                <div className='footer_logo_text'>
                    trydo
                </div>
            </div>
            <div className='footer_icon'>
               <div className='footer_icon_i'>
               <FaFacebookF/>
               </div>
               <div className='footer_icon_i'>
                <FaTwitter/>
               </div>
               <div className='footer_icon_i'>
                <GrLinkedinOption/>
               </div>
                <div className='footer_icon_i'>
                <FaSkype/>
               </div>
            </div>
            <div className='footer_copyright'>
                Copyright &copy; 2022 Rainbow-Themes.All Rights Reserved.
            </div>
        </div>
        </>
  )
}
export default Footer
