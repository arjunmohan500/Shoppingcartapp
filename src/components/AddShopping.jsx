import React from 'react'
import NavBar from './NavBar'

const AddShopping = () => {
  return (
    <div>
        <NavBar/>
            <div className="container">
                <marquee><h1>shopping cart</h1></marquee>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label"> id</div>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">title</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">

                                <div className="label form-label">price</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">description</div>
                               <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="label form-label">category</div>
                               <input type="text" className="form-control" />

                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <button className="btn btn-success">submit</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
  )
}

export default AddShopping