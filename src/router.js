import { BrowserRouter, Routes, Route} from "react-router-dom";
import Filme from "./pages/Filme";
import Home from "./pages/Home";
import Header from "./components/header";
import Error from "./pages/Error/error";
import Fav from "./pages/Favoritos/fav";

export default function Routers(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filme/:id" element={ <Filme/> }/>
                <Route path="/favoritos" element={ <Fav/> }/>
                <Route path="*" element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}