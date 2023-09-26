import { useState, useRef } from "react";

export default function GamesFilter({ genres, publishers, onFilterChange }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");

    const titleRef = useRef();
    const genreRef = useRef();
    const publisherRef = useRef();

    function handleTitleSearch(e) {
        const titleText = e.target.value;
        setTitle(titleText);
        applyFilters();
    }

    function handleGenreChange(e) {
        const genreText = e.target.value;
        setGenre(genreText);
        applyFilters();
    }

    function handlePublisherChange(e) {
        const selectedPublisher = e.target.value;
        setPublisher(selectedPublisher);
        applyFilters();
    }

    function applyFilters() {
        let title = titleRef.current.value;
        let genre = genreRef.current.value;
        let publisher = publisherRef.current.value;
        onFilterChange(title, genre, publisher);
    }

    function resetFilterControls() {
        setTitle("");
        setGenre("");
        setPublisher("");
        titleRef.current.value = "";
        genreRef.current.value = "";
        publisherRef.current.value = "";
    }

    function removeFilters() {
        resetFilterControls();
        applyFilters();
    }

    let genreOptionsJsx = genres.map(genre => {
        return (
            <option value={genre}>{genre}</option>
        )
    });
    genreOptionsJsx.unshift(<option value="">All</option>)

    let publisherOptionsJsx = publishers.map(publisher => {
        return (
            <option value={publisher}>{publisher}</option>
        )
    });
    publisherOptionsJsx.unshift(<option value="">All</option>)

    return (
        <>
            <div>
                <input type="text" ref={titleRef}
                    className="games-search-box"
                    value={title}
                    onChange={(e) => { handleTitleSearch(e) }}
                    placeholder="Enter a keyword to search a game">
                </input>
                <button onClick={() => { removeFilters(); }}>Reset</button>
            </div>
            <div className="genre-dropdown-list">
                Genre/Tag:
                <select ref={genreRef}
                    onChange={(e) => { handleGenreChange(e) }}
                >
                    {genreOptionsJsx}
                </select>

                Publisher:
                <select ref={publisherRef}
                    onChange={(e) => { handlePublisherChange(e) }}
                >
                    {publisherOptionsJsx}
                </select>
            </div>
        </>
    );
}