/* eslint-disable react/prop-types */
import React from 'react'
import '../Styles/homeservice.scss'

function HomeCard ({ icon, HomeCardTitle, HomeCardDiscription }) {
  return (
        <>
            <div className='HomeCard'>

                <div className='HomeCard_Icon'>
                        {icon}
                </div>
                <div className='HomeCard_Title'>
                    {HomeCardTitle}
                </div>
                <div className='HomeCard_Discription'>
                    {HomeCardDiscription}
                </div>
            </div>
        </>
  )
}
export default HomeCard
