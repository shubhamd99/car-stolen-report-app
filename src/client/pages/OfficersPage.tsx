import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addComplains } from '../store/actions';
import NavBar from '../components/NavBar';

const OfficersPage: React.SFC = () => {
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(addComplains());
    }, []);

    return (
        <>
            <NavBar page="police" name="Welcome Shubham" />
            <div className="hero-wrap" >
                    <div className="container">
                    </div>
            </div>
        </>
    )
}

export default OfficersPage;