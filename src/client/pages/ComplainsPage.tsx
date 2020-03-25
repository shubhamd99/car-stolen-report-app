import React from 'react';
import NavBar from '../components/NavBar';
import { useDispatch } from 'react-redux';
import { postComplains } from '../store/actions';

import { useInput } from '../utils/inputHook';

const ComplainsPage: React.SFC = () => {
    const dispatch: any = useDispatch();
    const { value: customerName, bind: bindCustomerName, reset: resetCustomerName } = useInput('');
    const { value: customerPhoneNumber, bind: bindCustomerPhoneNumber, reset: resetCustomerPhoneNumber } = useInput('');
    const { value: carModelNumber, bind: bindCarModelNumber, reset: resetCarModelNumber} = useInput('');
    const { value: note, bind: bindNote, reset: resetNote } = useInput('');

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // console.log("submit", customerName, customerPhoneNumber, carModelNumber, note);
        dispatch(postComplains({ customerName, customerPhoneNumber, carModelNumber, note}));

        // Reset The Form After Submit
        resetCarModelNumber();
        resetCustomerName();
        resetCustomerPhoneNumber();
        resetNote();
    }

    return (
        <>
            <NavBar page="home" />
            <div className="hero-wrap" >
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-start">
                            <div className="col-lg-6 col-md-6 ftco-animate">
                                <h1 className="mb-4"> Find Your Car <br /><span>STOLENCAR.COM</span></h1>
                                <p className="mb-4">Copyright ©2020 All rights reserved.</p>
                            </div>
                            <div className="col-lg-2 col"></div>
                            <div className="col-lg-4 col-md-6 mt-0 mt-md-5">
                                <form action="#" className="request-form ftco-animate" onSubmit={handleSubmit}>
                                    <h2>Fill Car Details</h2>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter your Name"
                                                {...bindCustomerName}  />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Car Model Number"
                                                {...bindCarModelNumber}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter your Phone"
                                                {...bindCustomerPhoneNumber}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter your Compalin" 
                                                {...bindNote}/>
                                            </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-primary py-3 px-4 mt-5">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ComplainsPage;