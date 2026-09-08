import Addnewdoctor from "./components/Addnewdoctor";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./components/styles.css";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

    const [newdoctor, setNewdoctor] = useState(null);

    return (
        <div>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home newdoctor={newdoctor} />}
                />

                <Route
                    path="/addnewdoctor"
                    element={
                        <Addnewdoctor
                            setNewdoctor={setNewdoctor}
                        />
                    }
                />

            </Routes>
        </div>
    );
}

export default App;