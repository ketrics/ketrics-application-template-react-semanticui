import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("ketrics-application");
const applicationUUID = root.getAttribute("applicationUUID");
const dataserverUUID = root.getAttribute("dataserverUUID");

ReactDOM.render(
    <App applicationUUID={applicationUUID} dataserverUUID={dataserverUUID} />,
    document.getElementById("ketrics-application")
);
