import React from 'react'
import '../Styles/plan.scss'

function Plan () {
  return (
        <>
        <div className='plan'>
            <div className='plan_Details'>
                <div className='plan_Details_heading'>
                    Pricing Plan
                </div>
                <div className='plan_Details_discription'>
                    There are many variations of passages of Lorem ipsum available,<br/>but the majority have suffered alteration.
                </div>
            </div>
            <div className='plan_template'>
                <div className='plan_template_card'>
                    <div className='plan_template_card_type'> Free </div>
                    <div className='plan_template_card_money'> 29 </div>
                    <div className='plan_template_card_perMonth'> USD Per Month </div>
                    <div className='plan_template_card_break'>
                        <div className='plan_template_card_break_line'></div>
                    </div>
                    <div className='plan_template_card_features'>
                        <div className='plan_template_card_features_ul'>5 PPC Campaigns</div>
                        <div className='plan_template_card_features_ul'>Digital Marketing</div>
                        <div className='plan_template_card_features_ul'>Marketing Agency</div>
                        <div className='plan_template_card_features_ul'>Seo Friendly</div>
                        <div className='plan_template_card_features_ul'>UI/UX designs</div>
                    </div>
                    <div className='plan_template_card_btn'>
                        <button>Purchase now</button>
                    </div>
                </div>

                <div className='plan_template_card'>
                    <div className='plan_template_card_type'> Business </div>
                    <div className='plan_template_card_money'> 30 </div>
                    <div className='plan_template_card_perMonth'> USD Per Month </div>
                    <div className='plan_template_card_break'>
                        <div className='plan_template_card_break_line'></div>
                    </div>
                    <div className='plan_template_card_features'>
                        <div className='plan_template_card_features_ul'>5 PPC Campaigns</div>
                        <div className='plan_template_card_features_ul'>Digital Marketing</div>
                        <div className='plan_template_card_features_ul'>Marketing Agency</div>
                        <div className='plan_template_card_features_ul'>Seo Friendly</div>
                        <div className='plan_template_card_features_ul'>UI/UX designs</div>
                    </div>
                    <div className='plan_template_card_btn'>
                        <button>Purchase now</button>
                    </div>
                </div>

                <div className='plan_template_card'>
                    <div className='plan_template_card_type'> Advanced </div>
                    <div className='plan_template_card_money'> 29 </div>
                    <div className='plan_template_card_perMonth'> USD Per Month </div>
                    <div className='plan_template_card_break'>
                        <div className='plan_template_card_break_line'></div>
                    </div>
                    <div className='plan_template_card_features'>
                        <div className='plan_template_card_features_ul'>5 PPC Campaigns</div>
                        <div className='plan_template_card_features_ul'>Digital Marketing</div>
                        <div className='plan_template_card_features_ul'>Marketing Agency</div>
                        <div className='plan_template_card_features_ul'>Seo Friendly</div>
                        <div className='plan_template_card_features_ul'>UI/UX designs</div>
                    </div>
                    <div className='plan_template_card_btn'>
                        <button>Purchase now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}
export default Plan
