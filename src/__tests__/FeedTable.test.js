import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import FeedTable from '../Components/FeedTable';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTable from 'react-table'
configure({ adapter: new Adapter() });


describe('FeedTable', () => {

    it("", () => {

    })

    it("always renders without crashing", () => {
        var feedprops
        shallow(<FeedTable feed={feedprops} />)
    });

    it("should render a search input field", () => {
        var feedData = undefined

        const wrapper = shallow(<FeedTable feed={feedData}/>)

        expect(wrapper.find('.mdc-textfield__input.longText')).toHaveLength(1)
    })


    it("should render a react table", () => {
        var feedData = undefined

        const wrapper = mount(<FeedTable feed={feedData}/>)

        expect(wrapper.contains(ReactTable)).toEqual(true)
    })


    it("should set the storedFeed data for search to work", () => {
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
            },
            {
                "first_seen": "Today!",
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

         const wrapper = shallow(<FeedTable feed={feedData}/>)

         expect(wrapper.state().storedFeed).toBeDefined()
    })






})