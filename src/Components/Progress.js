import React from 'react'
import '../Styles/progress.scss'
function Progress () {
  return (
        <>
            <div className='Progress'>
                <div className='Progress_dark'></div>
                <div className='Progress_Card'>
                    <div className='Progress_Card_Number'>
                        992 <sup>+</sup>
                    </div>
                    <div className='Progress_Card_Discription'>
                        The standard chunk of Lorem lpsum used since the 1500s is reproduced below for those
                    </div>
                </div>

                <div className='Progress_Card'>
                    <div className='Progress_Card_Number'>
                        575 <sup>+</sup>
                    </div>
                    <div className='Progress_Card_Discription'>
                        The standard chunk of Lorem lpsum used since the 1500s is reproduced below for those
                    </div>
                </div>

                <div className='Progress_Card'>
                    <div className='Progress_Card_Number'>
                        692 <sup>+</sup>
                    </div>
                    <div className='Progress_Card_Discription'>
                        The standard chunk of Lorem lpsum used since the 1500s is reproduced below for those
                    </div>
                </div>
            </div>
        </>
  )
}

export default Progress
