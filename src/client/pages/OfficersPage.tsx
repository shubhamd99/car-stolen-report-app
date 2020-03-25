import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addComplains } from '../store/actions';

const OfficersPage: React.FC = () => {
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(addComplains());
    }, []);

    return (
        <div>
            Officers Page
        </div>
    )
}

export default OfficersPage;