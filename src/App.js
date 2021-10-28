import React from "react";
import Accordion from "./components/Accordion";

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

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};
