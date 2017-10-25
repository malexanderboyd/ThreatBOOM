import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import ThreatsPieChart from '../Components/ThreatsPieChart';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PieChart from "react-svg-piechart"
configure({ adapter: new Adapter() });


describe('ThreatsPieChart', () => {

    it("always renders without crashing", () => {
        var threatsprops
        shallow(<ThreatsPieChart threats={threatsprops} />)
    });

    it("always renders a BarChart if provided threats props", () => {

        var threatsprops = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]
        const wrapper = shallow(<ThreatsPieChart threats={threatsprops} />)

        expect(wrapper.find(PieChart)).toHaveLength(1)

    });


    it("should render a header message with mdc style", () => {
        var threatsprops = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]

        const wrapper = shallow(<ThreatsPieChart threats={threatsprops} />)

        expect(wrapper.find('.mdc-card__title')).toHaveLength(1)
    })

    it("shouldn't render a subtitle (key) if there is no threats props", () => {
        var threatsprops = undefined
        const wrapper = shallow(<ThreatsPieChart threats={threatsprops} />)
        expect(wrapper.find(".mdc-card__subtitle").children()).toHaveLength(0)
    })


    it("should change the expanded sector on mouse hover", () => {
        var threatsprops = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]

        const wrapper = mount(<ThreatsPieChart threats={threatsprops} />)
        const oldVal = wrapper.state().expandedSector

        wrapper.find(".piechartHolder").simulate('click')
    })

})