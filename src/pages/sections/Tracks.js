import React from 'react';
import Slider from "../../components/Slider";


function Tracks(props) {

    return (
        <div className={'section'}>
            <div className={'section-page-container'}>
                <div className={'section-content-container'}>
                    <div className={'section-header'}>Tracks</div>
                </div>
            </div>
            <Slider />
        </div>
    )
}

export default Tracks;
