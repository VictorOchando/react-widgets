import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/search">
                <Search />
            </Route>

            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};
