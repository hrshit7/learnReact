// const heading = React.createElement("h1", {id:"heading"}, "I love React");

// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


/**
 * what if we want like that
 * <div id="parent">
 *      <div id= child>
 *           <h1>
 *           <h1>
 *      <div>
 * <div>
 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement(
        "div", 
        {id:"child"}, 
        [React.createElement(
            "h1", 
            {}, 
            "I am h1 tag"
        ),
        React.createElement(
            "h2", 
            {}, 
            "I am h2 tag"
        )
    ]
    ),
    React.createElement(
        "div", 
        {id:"child"}, 
        [React.createElement(
            "h1", 
            {}, 
            "I am h1 tag"
        ),
        React.createElement(
            "h2", 
            {}, 
            "I am h2 tag"
        )
    ]
    )
]
);

console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);