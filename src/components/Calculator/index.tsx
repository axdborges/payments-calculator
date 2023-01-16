import { useState } from "react";
import { Receive } from "../Receive";
import { Simulate } from "../Simulate";
import { StyledCalculator } from "./styles/styles";

export const Calculator = () => {

    const [tomorrow, setTomorrow] = useState(0);
    const [fifteen, setFifteenDays] = useState(0);
    const [thirty, setThirtyDays] = useState(0);
    const [ninety, setNinetyDays] = useState(0);

    return (
        <StyledCalculator>
            <Simulate
            setTomorrow={setTomorrow}
            setFifteenDays={setFifteenDays}
            setThirtyDays={setThirtyDays}
            setNinetyDays={setNinetyDays}/>
            <Receive
            tomorrow={tomorrow}
            fifteen={fifteen}
            thirty={thirty}
            ninety={ninety}/>
        </StyledCalculator>
    )
};