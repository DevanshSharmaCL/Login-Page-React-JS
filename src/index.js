import React from "react";
import ReactDOM from "react-dom/client";
import Data from "./Data"; 

const root = ReactDOM.createRoot(document.getElementById('root')); // Corrected
root.render(
    <React.StrictMode>
         <Data/>
    </React.StrictMode>
);
 