import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Test1 from './Test1';
import Test2 from './Test2';
import Button from '@mui/material/Button';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header >
                </header>
                <Routes>
                    <Route path={"/"} element={<Test1/>}/>
                    <Route path={"/test1"} element={<Button variant={"contained"}>test1</Button>}/>
                    <Route path={"/test2"} element={<Test2/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
