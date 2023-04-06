import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({Ring={Ring}}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p>{ring}</p>
        </div>
    );
};

export default Special;