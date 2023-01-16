import { StyledReceive } from "./styles/styles";

export const Receive = ({
    tomorrow,
    fifteen,
    thirty,
    ninety
}: any) => {

    return (
        <StyledReceive>
            <h3>Você receberá:</h3>
            <p>Amanhã: 
                <span>
                    R$ {tomorrow ? tomorrow : 0},00
                </span>
            </p>
            <p>Em 15 dias: 
                <span>
                    R$ {fifteen ? fifteen : 0},00
                </span>
            </p>
            <p>Em 30 dias: 
                <span>
                    R$ {thirty ? thirty : 0},00
                </span>
            </p>
            <p>Em 90 dias: 
                <span>
                    R$ {ninety ? ninety : 0},00
                </span>
            </p>
        </StyledReceive>
    )
};