import React, { useState } from 'react'
import Button from './Button';

export default function App() {
  
  const [tab, setTab] = useState("accound");


  function tabHandler(str) {
    setTab(str)

  }

  return (
    <div className='container-xl p-4'>
      <div className="row">
        <div className='col-4  p-5'>
          <div>
            <img src="profile.png" alt="" />
            <h5>Mark Cole</h5>
            <p>swoo@gmail.com</p>


            <div className='mt-4 d-flex flex-column gap-2'>
              <Button tab="accound" display="Accound info" tabHandler={tabHandler} />
              <Button tab="password" display="Change Password" tabHandler={tabHandler} />
              <Button tab="address" display="Address" tabHandler={tabHandler} />
              <Button tab="order" display="Order" tabHandler={tabHandler} />
            
            </div>
          </div>
        </div>
        <div className='col-8 bg-light p-2'>
          {
            tab === "accound" &&
            <div >
              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-12">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <h3 className="card-title text-center mb-4">Accound info</h3>
                      <form id="registrationForm">
                        {/* Personal Information */}
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your full name"
                            required=""
                          />
                          <div className="form-text">Please enter your full name.</div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required=""
                          />
                          <div className="form-text">
                            Please enter a valid email address.
                          </div>
                        </div>



                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-lg">
                            Register
                          </button>
                          <div id="formFeedback" className="mt-3" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          {
            tab === "password" &&
            <div >
              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12 col-sm-12">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <h3 className="card-title text-center mb-4">Accound info</h3>
                      <form id="registrationForm">
                        {/* Personal Information */}
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            old password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="name"
                            placeholder="Enter your old password"
                            required=""
                          />
                          <div className="form-text">Please enter your full name.</div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            new password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="name"
                            placeholder="Enter your new password"
                            required=""
                          />
                          <div className="form-text">Please enter your full name.</div>
                        </div>



                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-lg">
                            Register
                          </button>
                          <div id="formFeedback" className="mt-3" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          {
            tab === "address" &&
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed deserunt iste veniam modi laborum. Nisi possimus, perspiciatis atque mollitia, quidem optio reiciendis omnis similique voluptatem nihil repudiandae doloremque voluptates.
            </p>
          }



          {
            tab === "order" &&
            <h2>Order </h2>

          }


        </div>
      </div>

    </div>
  )
}
