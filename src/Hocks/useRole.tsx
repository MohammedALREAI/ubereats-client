import { useMeQuery } from "../generated/graphql";


export const useRole=()=>{
     const { data, } = useMeQuery();
     return data?.me.role
}