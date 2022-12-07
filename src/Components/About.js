import React from 'react'
import '../Styles/about.scss'
import { FaPlay } from 'react-icons/fa'

function About () {
  return (
        <>
            <div className='about_back'>
                <div className='about'>
                    <div className='about_details'>
                        <div className='about_details_title'>
                            About
                        </div>
                        <div className='about_details_discription'>
                            There are many variations of passages of Lorem Ipsum available.but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                        </div>
                        <div className='about_details_list_1'>
                            <div className='about_details_list_1_heading'>
                                Lorem ipsum dolor sit.
                            </div>
                            <div className='about_details_list_1_ul'>The Philosophy Of business analytics.</div>
                            <div className='about_details_list_1_ul'> Fast-Track Your business </div>
                            <div className='about_details_list_1_ul'> Lies And Damn Lies About business </div>
                            <div className='about_details_list_1_ul'> The Ultimate Deal On business </div>
                        </div>

                        <div className='about_details_list_1'>
                            <div className='about_details_list_1_heading'>
                                Lorem ipsum dolor sit.
                            </div>
                            <div className='about_details_list_1_ul'>The Philosophy Of business analytics.</div>
                            <div className='about_details_list_1_ul'> Fast-Track Your business </div>
                            <div className='about_details_list_1_ul'> Lies And Damn Lies About business </div>
                            <div className='about_details_list_1_ul'> The Ultimate Deal On business </div>
                        </div>
                    </div>
                    <div className='about_img'>
                        <div className='about_img_play'>
                            <div className='about_img_play_btn'>
                                <FaPlay/>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                </div>
            </div>
        </>
  )
}

export default About
