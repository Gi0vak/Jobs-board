import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';
import NewSingle from './pages/NewSingle';
import Page404 from './pages/Page404';
function App() {

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Home />} />
                <Route
                    path="/jobs/:jobID"
                    element={<Single />} />
                <Route
                    path="/newjob"
                    element={<NewSingle />} />
                <Route
                    path="/Search?:params"
                    element={<NewSingle />} />
                <Route
                    path="*"
                    element={<Page404 />} />
            </Routes>
        </div>

        // <>
        //   <div className="App">
        //     <button onClick={handleClick}>click moi</button>
        //     {datas.slice(0, 5)
        //       .map((data, index) => (
        //         < Card key={index} data={data} error={error} loading={isLoading} />
        //       ))}
        //   </div>
        //   <Form />
        // </>
    );
}

export default App;
