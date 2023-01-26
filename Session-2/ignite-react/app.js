import React from "react";
import ReactDOM from "react-dom/client";

const h1Heading = React.createElement(
    'h1',
    {},
    '-- *~ Namaste React ~* --'
);

const appRoot = ReactDOM.createRoot(
    document.getElementById('app')
);

appRoot.render(h1Heading);
