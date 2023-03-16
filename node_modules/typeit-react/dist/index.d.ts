import React from "react";
import { TypeItOptions } from "typeit";
export interface TypeItProps {
    as?: keyof JSX.IntrinsicElements;
    options?: TypeItOptions;
    children?: React.ReactNode;
    getBeforeInit?: (instance: any) => Function;
    getAfterInit?: (instance: any) => Function;
    [key: string]: any;
}
declare const TypeIt: React.FunctionComponent<TypeItProps>;
export default TypeIt;
