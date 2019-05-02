import React from "react";
import {Form} from "semantic-ui-react";
import {FormUI} from "ketrics-ui-react";


export default function Filters(props){
    return(
        <Form>
            <FormUI.SelectBaseDatos {...props} />
        </Form>
    )
}
