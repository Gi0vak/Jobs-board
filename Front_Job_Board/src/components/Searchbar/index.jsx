import loupe from "../../assets/pictures/loupe.svg";
import location from "../../assets/pictures/location.svg";
import { GetSearch } from "../../API/api";
import { useState, useEffect } from 'react';
import Media from 'react-media';
import { ThemeContext } from '../../ThemeContext';
import { useContext } from 'react';

import './index.css';

const SearchBar = ({ handleSearch }) => {
    // Déclaration des états
    const [searchValueOne, setSearchValueOne] = useState("");
    const [searchValueTwo, setSearchValueTwo] = useState("");
    const [searchValueThree, setSearchValueThree] = useState("");
    const [checked, setChecked] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [placeholder1, setPlaceholder1] = useState("Filter by title, companies, expertise...");
    const [placeholder2, setPlaceholder2] = useState("Filter by location...");
    const { theme } = useContext(ThemeContext);


    // Fonction qui permet de controler le position sticky de la barre de recherche
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

    // Fonction qui construit la requête de la barre de recherche
    const buildSearchQuery = (searchValueOne, searchValueTwo, checkInput) => {
        let searchQuery = '';

        if (searchValueOne && searchValueOne !== '') {
            searchQuery += `position=${searchValueOne}`;
        }

        if (searchValueTwo) {
            searchQuery += `${searchQuery ? '&' : ''}location=${searchValueTwo}`;
        }

        if (checkInput) {
            searchQuery += `${searchQuery ? '&' : ''}checkInput=${checkInput}`;
        }

        return searchQuery;
    };

    // Fonction qui lance la requête API pour la recherche
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await GetSearch(buildSearchQuery(searchValueOne, searchValueTwo, searchValueThree));
            return await handleSearch(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1068) {
                setPlaceholder1("Filter");
                setPlaceholder2("location");
            } else {
                setPlaceholder1("Filter by title, companies, expertise...");
                setPlaceholder2("Filter by location...");
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize(); // appel initial pour définir le placeholder en fonction de la taille de l'écran
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCheckboxChange = () => {
        setChecked(checked => !checked);
        checked ? setSearchValueThree("Full-time") : setSearchValueThree("");
    }


    // Affichage de la barre de recherche
    return (
        <form
            className={`form ${isSticky ? 'sticky' : ''} ${theme}`}
            onSubmit={handleSubmit}>

            <div className="grid-filter">
                <img
                    src={loupe}
                    className="loupe"
                    alt="loupe" />
                <input
                    className="input-filter"
                    onChange={handleInputOneChange}
                    placeholder={placeholder1}
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
                    placeholder={placeholder2}
                    name="location"
                    id="location"
                    type="text"
                    value={searchValueTwo}
                />
            </div>
            <div className="grid-full-time">
                <input
                    type="checkbox"
                    className="checkbox"
                    onChange={handleCheckboxChange} />
                <label>
                    <Media query="(max-width: 1210px)">
                        {match => match ? "Full Time" : "Full Time Only"}
                    </Media>
                </label>

            </div>
            <button className="button-one" type="submit" >
                Search
            </button>
        </form >
    );
};

export default SearchBar;
