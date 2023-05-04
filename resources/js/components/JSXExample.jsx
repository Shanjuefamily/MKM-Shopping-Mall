import React from "react";

export default function Header(props) {
    return (
        <>
            <h1>It is with JSX</h1>
            <h1>It is with JSX2</h1>
        </>
    );
}

// without JSX
// export default function Header(props) {
//     return React.createElement("h1", null, "It is without JSX");
// }
