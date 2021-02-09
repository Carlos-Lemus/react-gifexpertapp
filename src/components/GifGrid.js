import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { useFecthGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from './GifGridItem';

const GifGrid = ( { category } ) => {

    const {data:gifs, loading} = useFecthGifs(category);
    

    return (
        <>
            <h3>{ category }</h3>
            {loading && <p className="animate__animated animate__flash animate__delay-2">Loading...</p>}

            { <ol className="card-grid">
                {
                    gifs.map( image => (
                        <GifGridItem key={image.id} {...image} />
                    ))
                }
            </ol> }

        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;