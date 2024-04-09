/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Estate from '../estate/Estate';


Estates.propTypes = {

};

function Estates() {

    const [estates, setEstates] = useState([])

    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])


    return (
        <div className='mt-[100px]'>
            <h1 className='font-bold text-[42px] text-center'>Estates</h1>
            <p className='text-center'>Best deals with the best properties. Make your dream true</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    estates.map((estate) => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
}

export default Estates;