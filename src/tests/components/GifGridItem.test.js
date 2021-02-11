const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe("Probando el componente de <GifGridItem />", () => {

    const title = "title test";
    const url = "url test";
    
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test("Probando que se muestre correctamente el componente de <GifGridItem />", () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('p debe tener el valor de title que se le pasan por props', () => {
        
        const p = wrapper.find("p");

        expect( p.text() ).toBe(title);

    })
    
    test('el img debe tener los valores url y alt que se le pasan por props', () => {
        
        const img = wrapper.find("img");

        expect( img.prop("src") ).toBe( url );
        expect( img.prop("alt") ).toBe( title );

    })

    test('Debe tener la misma animacion que card animate__animated animate__fadeIn animate__delay-2', () => {
        
        const div = wrapper.find("div");

        expect( div.prop("className") ).toBe("card animate__animated animate__fadeIn animate__delay-2");
    })
    
    

});