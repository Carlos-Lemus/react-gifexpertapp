import getGifs from "../../helpers/getGifs";

describe("Probando el metodo getGifs", () => {

    test('getGifs debe traer 10 elementos (gifs)', async () => {
        
        const gifs = await getGifs("Saitama");

        expect( gifs.length ).toBe(10);

    })
    

});