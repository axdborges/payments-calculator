import styled from "styled-components";

export const StyledSimulate = styled.div`
    height: 100%;
    width: 60%;
    padding: 60px;

    color: var(--gray-text);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    gap: 30px;

    h2 {
        font-size: 26px;
    }

    form { 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        gap: 10px;


        width: 100%;

        .inputs {

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;

            label {
                font-size: 20px;
            }

            input {
                font-size: 20px;
                height: 36px;
                width: 100%;
                padding: 10px;

                border: solid 1px var(--gray-text);
                border-radius: 4px;

                ::placeholder {
                    font-size: 7px;
                    color: red;
                }
            }

            span {
                font-size: 10px;
            }

            input[type=number]::-webkit-inner-spin-button { 
                -webkit-appearance: none;
                
            }
            input[type=number] { 
                -moz-appearance: textfield;
                appearance: textfield;

            }
        }
        input[type=submit] {
            visibility: hidden;
            width: 1px;
            height: 1px;
        }
        
    }

`;