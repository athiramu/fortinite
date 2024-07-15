import React from 'react'
import './Project.css'
function Project() {
    return (
        <>
            <div className='container mt-5 '>
            <div>
            <p className='p_project text-center'>Interested in delving deeper into the project?</p>
            <div className='d-flex justify-content-center'>
                <p className='mt-5 p2_project col-12 col-md-8 text-center'>
                    If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.
                </p>
            </div>
        </div>

                <div className="d-flex justify-content-center">
            <div className="col-12 col-md-9">
                <div className="row mb-5">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <button type="button" className="btn btn-outline-light w-100">Ring us on Skype</button>
                    </div>
                    <div className="col-12 col-md-6">
                        <button type="button" className="btn btn-light w-100">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
            <p className="mb-5 text-center">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>
            </div>
        </>
    )
}

export default Project