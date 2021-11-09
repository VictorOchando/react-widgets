import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
    const [translatedText, setTranslatedText] = useState("");
    const [deBouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: deBouncedText,
                        target: language.value,
                        key: process.env.REACT_APP_TRANSLATE_KEY,
                    },
                }
            );

            setTranslatedText(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [language, deBouncedText]);

    return (
        <div>
            <h1 className="ui header">{translatedText}</h1>
        </div>
    );
};

export default Convert;
