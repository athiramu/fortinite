import React from 'react'
import './Project.css'
function Project() {
    return (
        <>
            <div className='container mt-5 '>
                <div className=''>
                    <p className='p_project'>Interested in delving deeper into the project?</p>
                    <div className=' d-flex justify-content-center'>
                        <p className='mt-5 p2_project col-8'>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center ms-5'>
                <div className='col-9 ms-5'>
                <div className='row ms-5  mb-5'>
                    <div className='col ms-5'>
                    <button type="button" class="btn btn-outline-light col-6">Ring us on Skype</button>
                    </div>
                    <div className='col'>
                    <button type="button" class="btn btn-light col-6">Contact Us</button>
                    </div>
                </div>
                </div>
                </div>

                <div className='d-flex justify-content-center mt-5 '>
                    <p className='mb-5'> © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Project