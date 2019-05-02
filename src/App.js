import React from 'react';
import {createKetricsReport} from "ketrics-ui-react";
import {joinWithSingleQuote, trimString, getSemanticOptions} from "ketrics-utils";
import * as softland from "ketrics-utils/Softland";
import Filters from "./components/Filters";
import Content from "./components/Content";


export default function App(props){
    const Report = createKetricsReport(Filters, Content);

    const initialState = {
        filters: {
            datasource: null
        },
        options: {
            datasources: []
        }
    }

    const validateFilters = (filters)=>{
        let errors = [];
        if(filters.datasource===null) errors.push("La Base de Datos es un campo requerido");
        return errors;
    }

    const prepareFilters = (filters)=>{
        return {
            ...filters
        };
    }

    return (
        <Report {...props}
                title="Cuenta Corriente Clientes"
                initialState={initialState}
                validateFilters={validateFilters}
                prepareFilters={prepareFilters}
        />
    )
}
