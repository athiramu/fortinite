import React from 'react'
import img1 from '../images/pic1.png'
import img2 from '../images/pic2.png'
import img3 from '../images/pic3.png'
import './Part2.css'
function Part2() {
    return (
        <>
            <div className='container'>
                <div className='mt-5 d-flex justify-content-center'>
                <div className='row'>
    <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
        <img src={img1} className='img-fluid' alt="..." />
        <div className='col-9'>
            <p className='part2_p'>Explore large, destructible environments where no two games are ever the same.</p>
        </div>
    </div>
    <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
        <img src={img2} className='img-fluid' alt="..." />
        <div className='col-9'>
            <p className='part2_p'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
        </div>
    </div>
    <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
        <img src={img3} className='img-fluid' alt="..." />
        <div className='col-9'>
            <p className='part2_p text-center'>Discover even more ways to play across thousands of creator-made game genres</p>
        </div>
    </div>
</div>

                </div>
            </div>

        </>
    )
}

export default Part2