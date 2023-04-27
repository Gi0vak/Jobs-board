import loupeMobile from "../../assets/pictures/loupeMobile.svg";
import filter from "../../assets/pictures/filter.svg";
import location from "../../assets/pictures/location.svg";
// import { handleSearch } from "../../../API/api";
import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import './index.css';
import Media from 'react-media';

const SearchbarMobile = () => {
    // Déclaration des états
    // const [searchValue, setSearchValue] = useState("");
    // const [searchResults, setSearchResults] = useState([]);
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
    // const handleInputChange = (event) => {
    //     setSearchValue(event.target.value);
    //     setTimeout(async () => {
    //         try {
    //             const data = await handleSearch(event.target.value);
    //             setSearchResults(data)
    //         } catch (error) {
    //             console.log(error);

    //         }
    //         console.log(searchResults);
    //     }, 500); // délai de 500ms avant de lancer la recherche
    // };

    // Fonction qui lance la requête API lorsqu'on appuie sur "Entrée" dans la barre de recherche
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/search/`;
    };

    return (

        <form className={`form-mobile ${isSticky ? 'sticky' : ''}`} onSubmit={handleSubmit}>
            <div className="grid-filter">

                <input
                    className="input-filter"
                    //onChange={handleInputChange}
                    placeholder="Filter by title, companies, expertise..."
                    name="search"
                    id="search"
                    autoComplete="off"
                    spellCheck="false"
                    autoCapitalize="off"
                    autoCorrect="off"
                    type="text"
                />

            </div>
            <img src={filter} className="filter" alt="filter" />
            <button className="button-one " type="submit"><img src={loupeMobile} alt="search" /></button>
            {/* <ul>
                
                {searchResults && searchResults.slice(0, 5).map((result) => (
                    (result.title && result.poster_path) && (
                        <Link to={`/single/${result.id}`}>
                            <li key={result.id}>
                                <img className='search-img' alt='search element' src={urlImg + result.poster_path} />
                                <p>{result.title}</p>
                            </li>
                        </Link>)
                ))}
            </ul> */}
            {/* Affichage des résultats de la recherche */}
            {/* utilisation de la méthode "map" pour itérer sur les résultats */}
            {/* limite  de la liste à 5 éléments avec la méthode "slice" */}
            {/* affiche seulement les résultats qui ont un titre défini */}
        </form>


    );
};

export default SearchbarMobile;
