import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import RansomwareBlurb from '../Components/RansomwareBlurb';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe("RansomwareBlurb", () => {

    it("should render without crashing", () => {
        shallow(<RansomwareBlurb/>)
    })

    it("it should render a title headline with mdc style", () => {
        const wrapper = shallow(<RansomwareBlurb/>)

        expect(wrapper.find('.mdc-typography--headline')).toHaveLength(1)
    })

    it("should link to tracker's website", () => {
        const wrapper = shallow(<RansomwareBlurb/>)
        var link = <a href="https://abuse.ch">Abuse.ch</a>

        expect(wrapper.contains(link)).toEqual(true)
    })

    it("should render ransomware definition with a subheading style", () => {
        const wrapper = shallow(<RansomwareBlurb/>)
         expect(wrapper.find('.mdc-typography--subheading2')).toHaveLength(1)
    })

    
})