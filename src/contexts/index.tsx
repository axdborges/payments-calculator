import React, { createContext, ReactNode, SetStateAction, useContext } from "react";
import { useState } from "react";
import api from "../services/api";

interface IContextProvider {
    children: ReactNode;
};

interface IContextProps {
    tomorrow: number;
    fifteen: number;
    thirty: number;
    ninety: number;
    setTomorrow: (value: number ) => void;
    setFifteenDays: (value: number ) => void;
    setThirtyDays: (value: number ) => void;
    setNinetyDays: (value: number ) => void;
};

export const CalculatorContext = createContext<IContextProps>(
    {} as IContextProps
)

export const useCalculatorContext = (): IContextProps => {
    const context = useContext(CalculatorContext);
    return context
}

export const CalculatorProvider = ({children}: IContextProvider) => {
    const [tomorrow, setTomorrow] = useState<number>(0);
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
            setNinetyDays
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}