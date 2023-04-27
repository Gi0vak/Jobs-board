import loupe from "../../assets/pictures/loupe.svg";
import location from "../../assets/pictures/location.svg";
import { GetSearch } from "../../API/api";
import { useState, useEffect } from 'react';
import Media from 'react-media';
import { Link } from "react-router-dom";

import './index.css';

const SearchBar = () => {
    // Déclaration des états
    const [searchValueOne, setSearchValueOne] = useState("");
    const [searchValueTwo, setSearchValueTwo] = useState("");
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 121) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Fonction appelée lorsque l'utilisateur tape quelque chose dans la barre de recherche
    const handleInputOneChange = (event) => {
        setSearchValueOne(event.target.value);
    };
    const handleInputTwoChange = (event) => {
        setSearchValueTwo(event.target.value);
    };
    // Fonction qui lance la requête API lorsqu'on appuie sur "Entrée" dans la barre de recherche
    const buildSearchQuery = (searchValueOne, searchValueTwo, checkInput) => {
        let searchQuery = '';

        if (searchValueOne && searchValueOne !== '') {
            searchQuery += `${searchValueOne}`;
        }

        if (searchValueTwo) {
            searchQuery += `${searchQuery ? '&' : ''}location=${searchValueTwo}`;
        }

        if (checkInput) {
            searchQuery += `${searchQuery ? '&' : ''}checkInput=${checkInput}`;
        }

        return searchQuery;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValueOne, searchValueTwo);
        console.log(buildSearchQuery(searchValueOne, searchValueTwo))
        GetSearch(buildSearchQuery(searchValueOne, searchValueTwo));
    }

    return (
        <form
            className={`form ${isSticky ? 'sticky' : ''}`}
            onSubmit={handleSubmit}>

            <div className="grid-filter">
                <img
                    src={loupe}
                    className="loupe"
                    alt="loupe" />
                <input
                    className="input-filter"
                    onChange={handleInputOneChange}
                    placeholder="Filter by title, companies, expertise..."
                    name="search"
                    id="search"
                    type="text"
                    value={searchValueOne}
                />
            </div>
            <div className="grid-location">
                <img src={location} className="location" alt="location" />
                <input
                    className="input-location"
                    onChange={handleInputTwoChange}
                    placeholder="Filter by location..."
                    name="location"
                    id="location"
                    type="text"
                    value={searchValueTwo}
                />
            </div>
            <div className="grid-full-time">
                <input
                    type="checkbox"
                    className="checkbox" />
                <label>
                    <Media query="(max-width: 1210px)">
                        {match => match ? "Full Time" : "Full Time Only"}
                    </Media>
                </label>

            </div>
            <Link to={`/search?${buildSearchQuery()}`}>
                <button className="button-one" type="submit">
                    Search
                </button>
            </Link>
            {/* Affichage des résultats de la recherche */}
            {/* utilisation de la méthode "map" pour itérer sur les résultats */}
            {/* limite  de la liste à 5 éléments avec la méthode "slice" */}
            {/* affiche seulement les résultats qui ont un titre défini */}
        </form >
    );
};

export default SearchBar;
