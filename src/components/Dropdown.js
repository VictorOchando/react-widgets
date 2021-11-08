import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener("click", onBodyClick, { capture: true });
        return () => {
            document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                onClick={() => onSelectedChange(option)}
                key={option.value}
                className="item"
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">Select a color</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${
                        open ? "visible active" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            <p style={{ color: selected.value }}>Texto de ejemplo</p>
        </div>
    );
};

export default Dropdown;
