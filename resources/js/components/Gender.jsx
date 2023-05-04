import React from 'react';
import Male from './Male';
import Female from "./Female";

const users = [
    { id: 1, name: "Alice", gender: "f" },
    { id: 2, name: "Bob", gender: "m" },
    { id: 3, name: "Tom", gender: "m" },
    { id: 4, name: "Mary", gender: "f" },
];

export default function Gender() {
    return (
        <>
            <Male items={users}></Male>
            <Female items={users}></Female>
        </>
    );
}