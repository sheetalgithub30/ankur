import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the LinkContext
const LinkContext = createContext();

// Custom hook to use LinkContext easily
export const useLinkContext = () => {
    return useContext(LinkContext);
};

// LinkProvider component to wrap the app
export const LinkProvider = ({ children }) => {
    const [link, setLink] = useState(() => {
        // Check if link is already stored in localStorage
        const savedLink = localStorage.getItem('savedLink');
        return savedLink || ''; // Return saved link or empty string
    });

    // Update localStorage whenever link state changes
    useEffect(() => {
        localStorage.setItem('savedLink', link);
    }, [link]);

    const value = {
        link,
        setLink,
    };

    return (
        <LinkContext.Provider value={value}>
            {children}
        </LinkContext.Provider>
    );
};
