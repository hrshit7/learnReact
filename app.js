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
            "h1", 
            {}, 
            "I am h1 tag"
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
            "h1", 
            {}, 
            "I am h1 tag"
        )
    ]
    )
]
);

console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);