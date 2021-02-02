import { render, waitFor } from "@testing-library/react";
import react from "react";
import { isLoginVar } from "../../Hocks/useApollo";
import App from "../App";

jest.mock('../../Routers/private.tsx',()=>{
    // return{
    //     private:
    // }
})
jest.mock('../../Routers/public.tsx.tsx',()=>{})

describe('application app <App/>', () => {

    it('render the private',async()=>{
        await waitFor(()=>{
            isLoginVar(true)
        })
    })


})

