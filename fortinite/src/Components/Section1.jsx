import React from 'react'
import './Section1.css'
import img1 from '../images/img1.png'
function Section1() {
    return (
        <>
            <div className='container'>
         
            <p className='p_section1 text-center'>
                Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.
            </p>
      
                <div className='img_section1 container'>
                    <img src={img1} className='img-fluid' alt='Responsive Image' />
                </div>
                <div className='d-flex justify-content-center'>
                    <p className='p2_section2  col-12 col-xxl-10'>
                        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
                    </p>
                </div>
                <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-light col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                Visit Website
            </button>
        </div>
            </div>

        </>
    )
}

export default Section1