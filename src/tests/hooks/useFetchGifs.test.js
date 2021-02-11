import { useFecthGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe("Probando el custom hook", () => {

    test('debe de retornar el estado inicial', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFecthGifs("One punch Man") );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        
        
        console.log(data, loading);

        expect( data ).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe de retornar una lista de img y loading debe ser false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFecthGifs("One punch Man") );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        

        console.log(data.length, loading);

        expect( data.length ).toBe(10);
        expect(loading).toBe(false);
    })
    

});