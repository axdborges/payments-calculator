import styled from "styled-components";

export const StyledReceive = styled.div`

    height: 100%;
    width: 40%;

    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 40px;

    background-color: var(--gray-background);
    
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;

    color: var(--blue-text);
    font-size: 20px;

    h3 {
        font-size: 23px;
    }

    p {
        font-style: italic;
        display: flex;
        gap: 7px;

        span {
            font-weight: bold;
        }
    }

`;