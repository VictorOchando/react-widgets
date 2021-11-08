import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: "Question 1?",
        content: "Long answer to question 1, not 2 or 3.",
    },
    {
        title: "Question 2?",
        content: "Long answer to question 2.",
    },
    {
        title: "Question 3?",
        content: "Long answer to question 3.",
    },
];

const options = [
    {
        label: "The color Red",
        value: "red",
    },
    {
        label: "The color of green",
        value: "green",
    },
    {
        label: "Shade of blue",
        value: "blue",
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <button
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}
            >
                Toggle Dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            ) : null}
        </div>
    );
};
