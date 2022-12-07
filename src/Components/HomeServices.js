import React from 'react'
import HomeCard from './HomeCard'
import { BiCast } from 'react-icons/bi'
import { SiDatabricks } from 'react-icons/si'
import { MdPeopleAlt } from 'react-icons/md'
import '../Styles/homeservice.scss'

function HoemServices () {
  return (
        <>
        <div className='homeservices'>
            <HomeCard icon={<BiCast />} HomeCardTitle ={'Business Stratagy'} HomeCardDiscription={'I throw myself down among the tall grass by the stream as i lie close to the earth.'} />
            <HomeCard icon={<SiDatabricks />} HomeCardTitle ={'Website Development'} HomeCardDiscription={'I throw myself down among the tall grass by the stream as i lie close to the earth.'}/>
            <HomeCard icon={<MdPeopleAlt />} HomeCardTitle ={'Marketing & Reporting'} HomeCardDiscription={'I throw myself down among the tall grass by the stream as i lie close to the earth.'}/>
        </div>
        </>
  )
}
export default HoemServices
