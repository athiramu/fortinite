import React from 'react'
import './Contribution.css'

function Contribution() {
    return (
        <>
            <div className='container'>
                <div className='col-12 mt-5'>
                    <p className='p_contribution '>Our Contribution</p>
                    <div className='col-12 d-flex justify-content-center mb-5'>
                        <p className='col-9 p2_contribution mt-5'>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className=' mt-5 col-8 mb-5'>
                            <div className='row'>
                                <div className='col-4'>
                                    <p className='engagements'>5M</p>
                                    <div className='mt-5 col-6 ms-5'>
                                        <p className='des-engagement '>Daily User Engagements</p>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <p className='engagements'>$500K</p>
                                    <div className='mt-5 col-8 ms-5'>
                                        <p className='des-engagement '>Revenue Surge for an
                                            Platform
                                        </p>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <p className='engagements'>10X</p>
                                    <div className='mt-5 col-9 ms-5'>
                                        <p className='des-engagement '>ROAS on all our
                                            marketing campaigns</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contribution