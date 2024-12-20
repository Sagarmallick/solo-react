import React from "react";
import ReactDOM from "react-dom/client";

//JSX( transpile before it reches to js) - parcel - babel
//JSX => bebel transpileit to Rect.createElement  =>ReactElement-js object  => HTML(render)

const jsxheading = <h1 className="head">React Element</h1>;

const Title = () => <h1>solo react for JSX</h1>;

const HeadingComponent = () => (
  <div id="container">
    {jsxheading}
    <Title />
    <Title></Title>
    {Title()}
    <h1>functional component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
