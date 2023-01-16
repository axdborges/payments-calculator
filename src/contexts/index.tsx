import React, { createContext, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import api from "../components/services/api";

interface IContextProvider {
    children: ReactNode;
};

interface IContextProps {
    tomorrow: number;
    fifteen: number;
    thirty: number;
    ninety: number;
    setTomorrow: React.Dispatch<SetStateAction<number>>;
    setFifteenDays: React.Dispatch<SetStateAction<number>>;
    setThirtyDays: React.Dispatch<SetStateAction<number>>;
    setNinetyDays: React.Dispatch<SetStateAction<number>>;
};

export const CalculatorContext = createContext<IContextProps>(
    {} as IContextProps
)

export const CalculatorProvider = ({children}: IContextProvider) => {
    const [tomorrow, setTomorrow] = useState(0);
    const [fifteen, setFifteenDays] = useState(0);
    const [thirty, setThirtyDays] = useState(0);
    const [ninety, setNinetyDays] = useState(0);

    return (
        <CalculatorContext.Provider value={{
            tomorrow,
            fifteen,
            thirty,
            ninety,
            setTomorrow,
            setFifteenDays,
            setThirtyDays,
            setNinetyDays,
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}