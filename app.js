// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "render h1 with the div element"),
    React.createElement("h1", {}, "render h2 with the div element"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
