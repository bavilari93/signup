import React from 'react';
import { promptModal } from 'redux/slices/common';
import { useAppDispatch } from 'redux/store';
import { staticMapModal } from 'common/helper/modals';
import { Link } from 'react-router-dom';
import { PATH_PAGE } from 'router/paths';
import SignUpForm from 'components/signup/signup-form';

const Home = ():JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <SignUpForm/>
            <div style={{display:'flex', flexDirection:"column"}}>
            <Link to={PATH_PAGE.mirage.map.interactive}>Interactive Map</Link>
            </div>

        </div>
    );
};

export default Home;