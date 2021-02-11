import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';
import PropTypes from "prop-types";

export const useFecthGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category).then(gifs => [

            setState({
                data: gifs,
                loading: false
            })

        ]);

    }, [category]);

    return state;
}

useFecthGifs.propTypes = {
    category: PropTypes.string.isRequired
}