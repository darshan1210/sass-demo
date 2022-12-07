import React from 'react'
import '../Styles/progress.scss'
function Progress () {
  return (
        <>
            <div className='Progress'>
                <div className='Progress_dark'>
                </div>
                <div className='ProgressCard'>
                    <div className='ProgressCardNumber'>
                        992 <sup>+</sup>
                    </div>
                    <div className='ProgressCardDiscription'>
                        The standard chunk of Lorem lpsum used since the 1500s is reproduced below for those
                    </div>
                </div>

                <div className='ProgressCard'>
                    <div className='ProgressCardNumber'>
                        575 <sup>+</sup>
                    </div>
                    <div className='ProgressCardDiscription'>
                        The standard chunk of Lorem lpsum used since the 1500s is reproduced below for those
                    </div>
                </div>

                <div className='ProgressCard'>
                    <div className='ProgressCardNumber'>
                        692 <sup>+</sup>
                    </div>
                    <div className='ProgressCardDiscription'>
                        The standard chunk of Lorem lpsum used since the 1500s is reproduced below for those
                    </div>
                </div>
            </div>
        </>
  )
}

export default Progress
