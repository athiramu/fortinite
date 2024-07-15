import React from 'react'
import './Contribution.css'

function Contribution() {
    return (
        <>
            <div className='container'>
                <div className='col-12 mt-5'>
                <div className='row'>
                <div className='col-12'>
                    <p className='p_contribution text-center'>Our Contribution</p>
                </div>
                <div className='col-12 d-flex justify-content-center mb-5'>
                    <div className='col-12 col-md-9'>
                        <p className='p2_contribution mt-5 text-center'>
                            Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
                        </p>
                    </div>
                </div>
            </div>

                    <div className='d-flex justify-content-center'>
      <div className='mt-5 col-12 col-md-8 mb-5'>
        <div className='row'>
          <div className='col-12 col-md-4 mb-4 mb-md-0'>
            <p className='engagements'>5M</p>
            <div className='mt-3 mt-md-5 col-12 ms-0  s'>
              <p className='des-engagement'>Daily User Engagements</p>
            </div>
          </div>
          <div className='col-12 col-md-4 mb-4 mb-md-0'>
            <p className='engagements'>$500K</p>
            <div className='mt-3 mt-md-5 col-12 ms-0 s'>
              <p className='des-engagement'>Revenue Surge for a Platform</p>
            </div>
          </div>
          <div className='col-12 col-md-4 s'>
            <p className='engagements '>10X</p>
            <div className='mt-3 mt-md-5 col-12 ms-0 '>
              <p className='des-engagement '>ROAS on all our marketing campaigns</p>
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