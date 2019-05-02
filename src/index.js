import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {KetricsApplication} from "ketrics-utils";

const ketricsApplication = new KetricsApplication();

ReactDOM.render(
    <App ketricsApplication={ketricsApplication}
    />,
    ketricsApplication.container
);

