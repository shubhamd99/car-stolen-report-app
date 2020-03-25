import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { addComplains } from '../store/actions';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';

const OfficersPage: React.SFC = () => {
    const dispatch: any = useDispatch();
    const complains = useSelector((state) => state.complains);

    useEffect(() => {
        dispatch(addComplains());
    }, []);

    const { id } = useParams();

    const sortedComplains = complains.sort((a, b) => {
        const c: any = new Date(b.createdAt);
        const d: any = new Date(a.createdAt);
        return c - d;
    });
    // console.log("data", id, complains);
    return (
        <>
            <NavBar page="police" name="Welcome Shubham" />
            <div className="hero-wrap" >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center">
                            <div className="col-sm col-md ibox">
                                {
                                    sortedComplains.map((complain: any, index: number) => {
                                        return <Cards key={index} complain={complain} userId={id} />
                                    })
                                }
                            </div>
                            <div className="col-sm col-md ibox">
                                One of two columns
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfficersPage;