import { StyledSimulate } from "./styles/styles";

export const Simulate = () => {
    return (
        <StyledSimulate>
            <h2>Simule sua Antecipação</h2>
            <form action="submit">
                <div className="inputs">
                    <label htmlFor="">
                        Informe o valor da venda *
                    </label>
                    <input type="number" required max={10000000}/>
                </div>
                <div className="inputs">
                    <label htmlFor="">
                        Em quantas parcelas *
                    </label>
                    <input type="number" max={12}/>
                    <span>Máximo de 12 parcelas</span>
                </div>
                <div className="inputs">
                    <label htmlFor="">
                        Informe o percentual de MDR *
                    </label>
                    <input type="number" />
                </div>
                <input type="submit" />
            </form>
        </StyledSimulate>
    )
};