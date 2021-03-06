import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories(categories => categories.concat(['HunterXHunter']));
    //     setCategories( categories => [ ...categories, 'HunterXHunter']);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={ setCategories } />
            <hr/>

            <div className="gif__container">
                { 
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }/>
                    )
                }
            </div>

        </>
    );
}

export default GifExpertApp;