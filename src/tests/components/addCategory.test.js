import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Probando el componente <addCategory />", () => {
   
    const setCateogires = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCateogires } /> );
    
    beforeEach(() => {
        jest.clearAllMocks();
       
        wrapper = shallow( <AddCategory setCategories={ setCateogires } /> );
    });

    test("Tomando un snapshot del componente <addCategory />", () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Probando el evento onChange en el input', () => {
        
        const input = wrapper.find("input");
        const value = "Prueba input";
        
        input.simulate("change", {
            target: {
                value: value
            }
        });

        expect( wrapper.find("p").text().trim() ).toBe(value);

    })
    
    test('no debe ser llamada la funcion setCategories', () => {
        
        wrapper.find("form").simulate("submit", {
            preventDefault() {}
        });
        
        expect(setCateogires ).not.toHaveBeenCalled();
    })
    
    test('Debe de llarmarse setCategories', () => {
        
        const value = "One punch Man";

        const input = wrapper.find("input");

        input.simulate("change", {
            target: {
                value: value
            }
        });

        wrapper.find("form").simulate("submit", {
            preventDefault() {}
        });

        expect( setCateogires ).toHaveBeenCalled();

        expect( input.prop("value") ).toBe("");
        console.log(input.text());
    })
    

});