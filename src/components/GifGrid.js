import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const { data:images, loading } = useFetchGifs( category );

    console.log(loading);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading</p> }

            <div className="gif__cards">
                {
                    images.map( img => 
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    )
                }
            </div>
        </>
    )
}
