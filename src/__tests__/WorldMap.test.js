import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import WorldMap from '../Components/WorldMap';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { scaleLinear } from 'd3-scale'
import ReactTooltip from "react-tooltip"
configure({ adapter: new Adapter() });


describe('countriesBarChart', () => {

    it("always renders without crashing", () => {
        var countryProps
        shallow(<WorldMap countries={countryProps} />)
    });

    it("always renders a Geographies if provided countries props", () => {

        var countryProps = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]
        const wrapper = shallow(<WorldMap countries={countryProps} />)

        expect(wrapper.find(Geographies)).toHaveLength(1)

    });


    it("should render a header message with mdc style", () => {
        var countryProps = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]

        const wrapper = shallow(<WorldMap countries={countryProps} />)

        expect(wrapper.find('.mdc-typography--headline')).toHaveLength(1)
    })

    it("sets the zoom level / 2 when clicking the zoom out button", () => {
        var countryProps = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]

        const wrapper = shallow(<WorldMap countries={countryProps} />)
        const oldVal = wrapper.state().zoom
        
        wrapper.find(".zoomOut").simulate('click')
        expect(wrapper.state().zoom).toEqual(oldVal/2)
    })

        it("sets the zoom level * 2 when clicking the zoom in button", () => {
        var countryProps = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]

        const wrapper = shallow(<WorldMap countries={countryProps} />)
        const oldVal = wrapper.state().zoom
        
        wrapper.find(".zoomIn").simulate('click')
        expect(wrapper.state().zoom).toEqual(oldVal*2)
    })


})