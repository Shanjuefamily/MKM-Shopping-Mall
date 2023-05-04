import React from "react";

export default function Male(props) {
    return (
        <>
            <h1>All are female</h1>
            <ul>
                {props.items
                    .filter((item) => item.gender == "m")
                    .map((item) => (
                        <li key={item.id}>
                            {item.name} is {item.gender}
                        </li>
                    ))}
            </ul>
        </>
    );
}
