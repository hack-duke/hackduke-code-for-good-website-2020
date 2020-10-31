import React from 'react';
import './Sections.css';

import Tracks from './sections/Tracks';
import Schedule from './sections/Schedule';
import FAQ from './sections/FAQ';
import Sponsors from './sections/Sponsors';

import yellowBottom from '../graphics/yellow-bottom.svg';
import PageFooter from '../components/PageFooter';

function Sections(props) {
    return (
        <div className={'all-sections'}>
            <img src={yellowBottom} alt=''></img>

            <div>
                <Tracks/>
                <Schedule/>
                <FAQ/>
                <Sponsors/>
            </div>

            <PageFooter/>
        </div>
    )
}

export default Sections;