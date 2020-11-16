import React from 'react';
import './Sections.css';

import Tracks from './sections/Tracks';
import Schedule from './sections/Schedule';
import FAQ from './sections/FAQ';
import Sponsors from './sections/Sponsors';

import yellowBottom from '../graphics/yellow-bottom.svg';

function Sections(props) {
    return (
        <div className={'all-sections'}>
            <img src={yellowBottom} alt=''></img>

            <div>
                <Tracks/>
                {/* <Schedule/> */}
                {/* <FAQ/> */}
                {/* <Sponsors/> */}
            </div>
        </div>
    )
}

export default Sections;
