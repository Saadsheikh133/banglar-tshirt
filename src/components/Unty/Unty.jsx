import React from 'react';
import Cousin from '../Cousin/Cousin';

const Unty = () => {
    return (
        <div>
            <h2>Untie</h2>
            <section className='flex'>
                <Cousin>Rahim</Cousin>
                <Cousin>Korim</Cousin>
            </section>
        </div>
    );
};

export default Unty;