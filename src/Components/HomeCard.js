/* eslint-disable react/prop-types */
import React from 'react'
import '../Styles/homeservice.scss'

function HomeCard ({ icon, HomeCardTitle, HomeCardDiscription }) {
  return (
        <>
            <div className='HomeCard'>
                <div className='HomeCardIcon'>
                    <div className='temp2'>
                    {icon}
                    </div>
                    </div>
                <div className='HomeCardTitle'>
                    {HomeCardTitle}
                </div>
                <div className='HomeCardDiscription'>
                   {HomeCardDiscription}
                </div>
            </div>
        </>
  )
}
export default HomeCard
