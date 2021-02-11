import { shallow } from "enzyme";
import GifExpertApp from "../../GifExpertApp";

describe("Probando el componente GifExpertApp", () => {

    const wrapper = shallow( <GifExpertApp /> );

    test('Debe de mostrar el componente de GifExpertApp', () => {

        expect( wrapper ).toMatchSnapshot();

    })
    

});