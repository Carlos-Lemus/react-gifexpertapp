import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFecthGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Probando el componente <GifGrid />", () => {

    const category = "Saitma"; 
    
    test('Haciendo snapshot sobre el componente <GifGrid />', () => {
        
        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={category} /> );
        
        expect(wrapper).toMatchSnapshot();  
    })
    
    test('debe mostrar items cuando carga las imagenes', () => {
        
        const gifs = [{
            id: 1,
            url: "https://loqueseam",
            title: "gif test"
        }]
        
        useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category} /> );
        
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find("p").exists() ).toBe(false);

    })
    

});