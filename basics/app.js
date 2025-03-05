// nested 
const parent = React.createElement("div", {id : "parent"},[
     React.createElement("div", {id : "child"},[
     React.createElement("h1", {id : "heading"}, "I am a heading... " ),
     React.createElement("h2", {id : "heading"}, "I am a heading2... " ),
     ]),
     React.createElement("div", {id : "child2"},[
        React.createElement("h1", {id : "heading"}, "I am a heading... " ),
        React.createElement("h2", {id : "heading"}, "I am a heading2... " ),
    ]),
]);

//const heading = React.createElement("h1", {id : "heading"}, "Hello from react!! ");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// react element is an object , when we render this its mean it is converting this to an html (browser understands )
// if we render anything then the already existing things will be replaced by the new one .
root.render(parent);