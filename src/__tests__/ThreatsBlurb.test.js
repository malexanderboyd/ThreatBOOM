import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import ThreatsBlurb from '../Components/ThreatsBlurb';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe("ThreatsBlurb", () => {

    it("should render without crashing", () => {
        shallow(<ThreatsBlurb/>)
    })

    it("it should render a title headline with mdc style", () => {
        const wrapper = shallow(<ThreatsBlurb/>)

        expect(wrapper.find('.mdc-typography--headline')).toHaveLength(1)
    })

    it("should render a container mdc-layout-grid", () => {
        const wrapper = shallow(<ThreatsBlurb/>)
        expect(wrapper.find('.mdc-layout-grid')).toHaveLength(1)
    })

    it("should render 3 ransomware definitions with a subheading style", () => {
        const wrapper = shallow(<ThreatsBlurb/>)
         expect(wrapper.find('.mdc-typography--subheading2')).toHaveLength(3)
    })

    
})