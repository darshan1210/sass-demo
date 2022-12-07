import React from 'react'
import team1 from '../asets/img/Team1.png'
import team2 from '../asets/img/Team2.png'
import team3 from '../asets/img/Team3.png'
import team4 from '../asets/img/Team4.png'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import '../Styles/team.scss'

function ManagingTeam () {
  return (
        <>
        <div className='managing_team'>

            <div className='managing_team_heading'>
                <div className='managing_team_heading_title'>
                    Managing Team
                </div>
                <div className='managing_team_heading_discription'>
                    There are many variations of passages of Lorem lpsum available, <br /> but the majority have suffered alteration.
                </div>
            </div>

            <div className='managing_team_template'>
                <div className='managing_team_template_card'>
                    <div className='managing_team_template_card_img'> <img src={team1} alt="" /> </div>
                    <div className='managing_team_template_card_name'> Jone Jan </div>
                    <div className='managing_team_template_card_domain'> Sr . Web Developer </div>
                    <div className='managing_team_template_card_icons'>
                        <span><FaFacebookF/></span>
                        <span><GrLinkedinOption/></span>
                        <span><FaTwitter/></span>
                    </div>
                </div>

                <div className='managing_team_template_card'>
                    <div className='managing_team_template_card_img'> <img src={team2} alt="" /> </div>
                    <div className='managing_team_template_card_name'> Jone Jan </div>
                    <div className='managing_team_template_card_domain'> Sr . Web Developer </div>
                    <div className='managing_team_template_card_icons'>
                        <span><FaFacebookF/></span>
                        <span><GrLinkedinOption/></span>
                        <span><FaTwitter/></span>
                    </div>
                </div>

                <div className='managing_team_template_card'>
                    <div className='managing_team_template_card_img'> <img src={team3} alt="" /> </div>
                    <div className='managing_team_template_card_name'> Jone Jan </div>
                    <div className='managing_team_template_card_domain'> Sr . Web Developer </div>
                    <div className='managing_team_template_card_icons'>
                        <span><FaFacebookF/></span>
                        <span><GrLinkedinOption/></span>
                        <span><FaTwitter/></span>
                    </div>
                </div>

                <div className='managing_team_template_card'>
                    <div className='managing_team_template_card_img'> <img src={team4} alt="" /> </div>
                    <div className='managing_team_template_card_name'> Jone Jan </div>
                    <div className='managing_team_template_card_domain'> Sr . Web Developer </div>
                    <div className='managing_team_template_card_icons'>
                        <span><FaFacebookF/></span>
                        <span><GrLinkedinOption/></span>
                        <span><FaTwitter/></span>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}
export default ManagingTeam
