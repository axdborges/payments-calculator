import { StyledSimulate } from "./styles/styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import api from "../services/api";
import { AxiosError, AxiosResponse } from "axios";

import { useContext } from "react";
import { CalculatorContext } from "../../contexts";


interface IData {
    amount: Number;
    installments: Number;
    mdr: Number;
    // days?: Number[];
};

export interface IResponse {
    1: Number;
    15: Number;
    30: Number;
    90: Number;
};

export const Simulate = () => {

    const { setTomorrow, setFifteenDays, setThirtyDays, setNinetyDays } = useContext(CalculatorContext)


    const schema = yup.object().shape({
        amount: yup.number().required("* Campo obrigatório"),
        installments: yup.number().required("* Campo obrigatório"),
        mdr: yup.number().required("* Campo obrigatório"),
        // days: yup.array()
    })

    const { register, handleSubmit, formState: {errors} ,} = useForm<IData>({
        resolver: yupResolver(schema)
    })

    const submitFunction = (data: IData) => {
        api.post("", data)
        .then((response: AxiosResponse) => {
            const resTomorrow: any = Object.values(response.data)[0]
            const resFifteen: any = Object.values(response.data)[0]
            const resThirty: any = Object.values(response.data)[0]
            const resNinety: any = Object.values(response.data)[0]
            setTomorrow(resTomorrow)
            setFifteenDays(resFifteen)
            setThirtyDays(resThirty)
            setNinetyDays(resNinety)    
        })
        .catch((err: AxiosError) =>{
            console.log(err);  
        })
    }


    return (
        <StyledSimulate>
            <h2>Simule sua Antecipação</h2>
            <form action="" onSubmit={handleSubmit(submitFunction)}>
                <div className="inputs">
                    <label htmlFor="">
                        Informe o valor da venda *
                    </label>
                    <input type="number" max={10000000} required
                    placeholder={errors.amount?.message} {...register("amount")}/>
                </div>
                <div className="inputs">
                    <label htmlFor="">
                        Em quantas parcelas *
                    </label>
                    <input type="number" max={12} required
                    placeholder={errors.installments?.message} {...register("installments")}/>
                    <span>Máximo de 12 parcelas</span>
                </div>
                <div className="inputs">
                    <label htmlFor="">
                        Informe o percentual de MDR *
                    </label>
                    <input type="number" max={100} required
                    placeholder={errors.mdr?.message} {...register("mdr")}/>
                </div>
                <input type="submit" />
            </form>
        </StyledSimulate>
    )
};