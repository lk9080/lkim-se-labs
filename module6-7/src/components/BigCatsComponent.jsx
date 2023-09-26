import React, { useState } from 'react';
import babyCheetahImage from '../img/baby cheetah.jpg'
import babyCougarImage from '../img/baby cougar.jpg'
import babyJaguarImage from '../img/baby jaguar.jpg'
import babyLeopardImage from '../img/baby leopard.jpg'
import babyLionImage from '../img/baby lion.jpg'
import babySnowLeopardImage from '../img/baby snow leopard.jpg'
import babyTigerImage from '../img/baby tiger.jpg'
import AddCatForm from './AddCatFormComponent';

const cats = [
    {
        id: 1,
        name: 'Cheetah',
        latinName: 'Acinonyx jubatus',
        image: babyCheetahImage
    },
    {
        id: 2,
        name: 'Cougar',
        latinName: 'Puma concolor',
        image: babyCougarImage
    },
    {
        id: 3,
        name: 'Jaguar',
        latinName: 'Panthera onca',
        image: babyJaguarImage
    },
    {
        id: 4,
        name: 'Leopard',
        latinName: 'Panthera pardus',
        image: babyLeopardImage
    },
    {
        id: 5,
        name: 'Lion',
        latinName: 'Panthera leo',
        image: babyLionImage
    },
    {
        id: 6,
        name: 'Snow leopard',
        latinName: 'Panthera uncia',
        image: babySnowLeopardImage
    },
    {
        id: 7,
        name: 'Tiger',
        latinName: 'Panthera tigris',
        image: babyTigerImage
    }
];


function SingleCat({ cat, onDelete }) {
    const { id, name, latinName, image } = cat;

    return (
        <div>
            <h2>{name}</h2>
            <p>Latin Name: {latinName}</p>
            <img src={image} alt={name} style={{ width: '200px' }} />
            <br />
            <button onClick={() => onDelete(id)}>&#10060;&#128049;</button>
        </div>
    );
}

function BigCatsComponent() {
    const [displayedCats, setDisplayedCats] = useState(cats);

    const sortAlphabetical = () => {
        const sortedCatsAlphabetical = [...displayedCats].sort((a, b) => a.name.localeCompare(b.name));
        setDisplayedCats(sortedCatsAlphabetical);
    };

    const sortReverseAlphabetical = () => {
        const sortedCatsReverseAlphabetical = [...displayedCats].sort((a, b) => b.name.localeCompare(a.name));
        setDisplayedCats(sortedCatsReverseAlphabetical);
    };

    const filterPantheraFamily = () => {
        const pantheraCats = cats.filter((cat) => cat.latinName.includes('Panthera'));
        setDisplayedCats(pantheraCats);
    };

    const resetList = () => {
        setDisplayedCats(cats);
    };

    const handleAddCat = (newCat) => {
        setDisplayedCats((prevCats) => [...prevCats, { ...newCat, id: Date.now() }]);
    };  
      

    const handleDeleteCat = (catId) => {
        const updatedCats = displayedCats.filter((cat) => cat.id !== catId);
        setDisplayedCats(updatedCats);
    };

    return (
        <>
            <div>
                <h1>List of Cats</h1>
                {displayedCats.length > 0 ? (
                    displayedCats.map((cat) => <SingleCat key={cat.name} cat={cat} onDelete={handleDeleteCat}/>)
                ) : (
                    cats.map((cat) => <SingleCat key={cat.name} cat={cat} />)
                )}
            </div>

            <div style={{ border: '5px solid green', borderRadius: '10px', padding: '10px', margin: '10px' }}>
                <button onClick={sortAlphabetical}>
                    Alphabetical!
                </button>

                <button onClick={sortReverseAlphabetical}>
                    Reverse Alphabetical!!
                </button>

                <button onClick={filterPantheraFamily}>
                    Show only Panthera
                </button>

                <button onClick={resetList}>
                    Reset List
                </button>
            </div>

            <div style={{ border: '5px solid blue', borderRadius: '10px', padding: '10px', margin: '10px' }}>
                <AddCatForm onAddCat={handleAddCat} />
            </div>
        </>
    );
}

export default BigCatsComponent;
