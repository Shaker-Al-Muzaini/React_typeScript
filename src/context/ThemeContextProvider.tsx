import React from "react";
import { ThemeContext } from "./ThemeContext";
import { theme } from "./Them";

type ThemeContextProps = {
    children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};
