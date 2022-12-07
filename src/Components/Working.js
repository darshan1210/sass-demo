import React from 'react'
import img from '../asets/img/progress.png'
import '../Styles/working.scss'

function Working () {
  return (
        <>
            <div className='Working_process_back'>
                <div className='Working_process'>
                    <div className='Working_process_img'>
                        <img src={img} alt="" />
                    </div>
                    <div className='Working_process_details'>
                        <div className='Working_process_title'>
                            Working Process
                        </div>
                        <div className='Working_process_discription1'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?
                        </div>
                        <div className='Working_process_discription2'>
                            <span>Your Business Skills But Novor Stop Improving.
                                 <div className='Working_process_discription2_line'></div>
                                 </span>

                        </div>
                        <div className='Working_process_discription3'>
                            Anim pariatur cliche reprehenderit, enim elusmod high lifeaccusamus terry richardson ad squid. 3 wolf moon officio oute,non cupidatat.
                        </div>
                        <div className='Working_process_discription4'>
                            Tactics That Can Help Your Business Grow.
                            <div className='Working_process_discription4_line'></div>
                        </div>
                        <div className='Working_process_discription5'>
                            The Socrol of Successful Business.
                            <div className='Working_process_discription4_line'></div>
                        </div>
                        <div className='Working_process_discription6'>
                            How To Stan A Business With Buckness.
                            <div className='Working_process_discription4_line'></div>
                        </div>

                        <button className='Working_process_btn'> See how it works</button>
                    </div>
                </div>
            </div>
        </>

  )
}

export default Working
