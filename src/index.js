
import ReactDom from "react-dom";
import './index.css';
import React from 'react'
import App from './App'


const Index = () => {
    return (
        <React.Fragment>
            <App></App>
        </React.Fragment>
    )
}

ReactDom.render(<Index />, document.getElementById('root'));