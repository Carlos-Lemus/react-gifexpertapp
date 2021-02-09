const getGifs = async (category) => {

    const keyApi = "wtJYpmdVufdl75zORD6pmTNwe1X62aXY";

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${keyApi}&q=${ encodeURI(category) }&limit=10`;
    
    const response = await fetch(url);

    const { data } = await response.json();
    
    const gifs = data.map( ({id, title,  images: { downsized_medium: { url } } } ) => {
        return ({
            id, title, url
        });
    });

    return gifs;
};

export default getGifs;