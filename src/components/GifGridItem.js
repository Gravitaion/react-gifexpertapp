
import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div className="gif__card animate__animated animate__fadeIn">
            <figure className="gif__figure">
                <img className="gif__img" src={ url } alt= { title } />
            </figure>
            <p className="gif__description">{ title }</p>
        </div>
    )
}
