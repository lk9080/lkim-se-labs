import React, { useState } from 'react';

function AddCatForm({ onAddCat }) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleLatinNameChange = (event) => {
        setLatinName(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCat = {
            name,
            latinName,
            image,
        };

        onAddCat(newCat);

        setName('');
        setLatinName('');
        setImage('');
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        New &#128049; Name:
                        <input
                            type="text"
                            name="newCatName"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="name here..."
                        />
                    </label>
                    <br />
                    <label>
                        New &#128049; Latin Name:
                        <input
                            type="text"
                            name="newCatLatinName"
                            value={latinName}
                            onChange={handleLatinNameChange}
                            placeholder="latin name here..."
                        />
                    </label>
                    <br />
                    <label>
                        New &#128049; Image:
                        <input
                            type="url"
                            name="newCatImage"
                            value={image}
                            onChange={handleImageChange}
                            placeholder="image url here..."
                        />
                    </label>
                    <p style={{ color: 'Gray' }}>&#128073; use this URL for a cute cat! : https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg</p>
                    <br />
                    <button type="submit">Insert new &#128049;</button>
                </form>
            </div>
        </>
    );
}

export default AddCatForm;
