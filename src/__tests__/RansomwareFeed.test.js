import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import RansomwareFeed from '../Components/RansomwareFeed';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WorldMap from '../Components/RansomwareFeed';
import FeedTable from '../Components/FeedTable';
configure({ adapter: new Adapter() });


describe("RansomwareFeed", () => {

    it("should render without crashing", () => {
        shallow(<RansomwareFeed countries={undefined} feed={undefined} />)
    })

    it("it should render a WorldMap component by default", () => {
                var feedData = [
            {
                "first_seen": "Yesterday!",
                "threat": "SPooky Ghost",
                "malware": "casper",
                "host": "123SPooky.com",
                "url": "moc.ykoops321",
                "status": "online",
                "registrar": "gravereaper",
                "asn": "Asn",
                "country": "Underworld"
            }
        ]

                var countries = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]
        const wrapper = mount(<RansomwareFeed countries={countries} feed={feedData} />)

        expect(wrapper.contains(WorldMap)).toEqual(true)
    })


    it("should render a toggle table view button", () => {
     var feedData = [
            {
                "first_seen": "Yesterday!",
                "threat": "SPooky Ghost",
                "malware": "casper",
                "host": "123SPooky.com",
                "url": "moc.ykoops321",
                "status": "online",
                "registrar": "gravereaper",
                "asn": "Asn",
                "country": "Underworld"
            }
        ]

                var countries = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]
        const wrapper = mount(<RansomwareFeed countries={countries} feed={feedData} />)
        

        expect(wrapper.find('.toggleBtn')).toHaveLength(1)

    })

    it("should display a FeedTable Component after clicking toggle table view.", () => {
                        var feedData = [
            {
                "first_seen": "Yesterday!",
                "threat": "SPooky Ghost",
                "malware": "casper",
                "host": "123SPooky.com",
                "url": "moc.ykoops321",
                "status": "online",
                "registrar": "gravereaper",
                "asn": "Asn",
                "country": "Underworld"
            }
        ]

                var countries = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]
        const wrapper = mount(<RansomwareFeed countries={countries} feed={feedData} />)
        
        const oldVal = wrapper.state().isVisible

        wrapper.find('.toggleBtn').simulate('click')
    
        expect(wrapper.state().isVisible).not.toEqual(oldVal)
        expect(wrapper.contains(FeedTable)).toEqual(true)
    })

    
})