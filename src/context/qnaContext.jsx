import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the QnaFormContext
const QnaFormContext = createContext();

// Custom hook to use QnaFormContext easily
export const useQnaFormContext = () => useContext(QnaFormContext);

// QnaFormProvider component to wrap the app
export const QnaFormProvider = ({ children }) => {
    const [qnaFormData, setQnaFormData] = useState(() => {
        // Check if qnaFormData is already stored in localStorage
        const savedData = localStorage.getItem('qnaFormData');
        return savedData ? JSON.parse(savedData) : {}; // Return parsed data or an empty object
    });

    const [oneOnOneData, setOneOnOneData] = useState(() => {
        // Check if oneOnOneData is already stored in localStorage
        const savedData = localStorage.getItem('oneOnOneData');
        return savedData ? JSON.parse(savedData) : {}; // Return parsed data or an empty object
    });

    // Update localStorage whenever qnaFormData state changes
    useEffect(() => {
        localStorage.setItem('qnaFormData', JSON.stringify(qnaFormData));
    }, [qnaFormData]);

    // Update localStorage whenever oneOnOneData state changes
    useEffect(() => {
        localStorage.setItem('oneOnOneData', JSON.stringify(oneOnOneData));
    }, [oneOnOneData]);

    const value = {
        qnaFormData,
        setQnaFormData,
        oneOnOneData,
        setOneOnOneData,
    };

    return (
        <QnaFormContext.Provider value={value}>
            {children}
        </QnaFormContext.Provider>
    );
};
