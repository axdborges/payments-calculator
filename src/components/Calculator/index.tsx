import { Receive } from "../Receive";
import { Simulate } from "../Simulate";
import { StyledCalculator } from "./styles/styles";

export const Calculator = () => {

    return (
        <StyledCalculator>
            <Simulate/>
            <Receive/>
        </StyledCalculator>
    )
};