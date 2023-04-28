import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';
import NewSingle from './pages/NewSingle';
import UpdateSingle from './pages/UpdateSingle';
import Page404 from './pages/Page404';
import HomeAdmin from './pages/HomeAdmin';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {

    const [theme, setTheme] = useState('light');
    const [bodyTheme, setBodyTheme] = useState('body-light');

    const toggleTheme = () => {
        console.log('click');
        setTheme(theme === 'light' ? 'dark' : 'light');
        setBodyTheme(bodyTheme === 'body-light' ? 'body-dark' : 'body-light');
    };
    return (
        <div className="App">
            <ThemeContext.Provider
                value={{ theme, setTheme, bodyTheme, setBodyTheme, toggleTheme }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home theme={theme} bodytheme={bodyTheme} />} />
                    <Route
                        path="/admin"
                        element={<HomeAdmin theme={theme} bodytheme={bodyTheme} />} />
                    <Route
                        path="/jobs/:jobID"
                        element={<Single theme={theme} bodytheme={bodyTheme} />} />
                    <Route
                        path="/newjob"
                        element={<NewSingle theme={theme} bodytheme={bodyTheme} />} />
                    <Route
                        path="/updatejob/:jobID"
                        element={<UpdateSingle theme={theme} bodytheme={bodyTheme} />} />
                    <Route
                        path="*"
                        element={<Page404 theme={theme} bodytheme={bodyTheme} />} />
                </Routes>
            </ThemeContext.Provider>
        </div>

    );
}

export default App;
