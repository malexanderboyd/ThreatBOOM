import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import fetch from 'isomorphic-fetch';
import VisualsContainer from '../Components/VisualsContainer';
import MalwareBarChart from '../Components/MalwareBarChart';
import ThreatsPieChart from '../Components/ThreatsPieChart';
import RansomwareFeed from '../Components/RansomwareFeed';
import RansomwareBlurb from '../Components/RansomwareBlurb';
import ThreatsBlurb from '../Components/ThreatsBlurb';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const serverURL = "https://mysterious-ridge-67938.herokuapp.com"
configure({ adapter: new Adapter() });

var topProp
var feedData
var VCProps


beforeEach(() => {
           topProp = [
            {
                "value": "Spooky Halloween",
                "count": "31"
            },
            {
                "value": "Ghostly!",
                "count": "15"
            }
        ]

         feedData = [
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

         VCProps = {
          "feed" : feedData,
          "countries" : topProp,
          "malware" : topProp,
          "threats" : topProp
        }

})












describe('fetch() feed data using Promises', () => {

  it('/feed should load feed data', async () => {
  return fetch(serverURL + '/feed')
      .then((response) => {
            expect(response).toBeDefined();
            response.json()
            .then( (res) => {
              expect(res).toBeDefined()
              expect(res.length).toBeGreaterThan(0);
              // feed data should come with threat, malware, and country list to populate visuals
              expect(res.feed).toBeDefined()
              expect(res.malware).toBeDefined()
              expect(res.threat).toBeDefined()
              expect(res.country).toBeDefined()
            })
            .catch( (error) => {
              console.log(error);
              console.log(error.message);
            })
      })
      .catch( (error) => {
        console.log(error);
      })

  });

  it("should render a grid_inner container div", () => {
    const wrapper = shallow(<VisualsContainer feed={VCProps}/>)

    expect(wrapper.find(".mdc-layout-grid__inner")).toHaveLength(1)

  })

  it("should render a ransomware blurb component.", () => {
    const wrapper = mount(<VisualsContainer feed={VCProps}/>)

    expect(wrapper.contains(RansomwareBlurb)).toEqual(true)
  })

  it("should render a ransomware feed component.", () => {
    const wrapper = mount(<VisualsContainer feed={VCProps}/>)

    expect(wrapper.contains(RansomwareFeed)).toEqual(true)
  })

    it("should render a threats pie chart  component.", () => {
    const wrapper = mount(<VisualsContainer feed={VCProps}/>)

    expect(wrapper.contains(ThreatsPieChart)).toEqual(true)
  })

    it("should render a threats blurb  component.", () => {
    const wrapper = mount(<VisualsContainer feed={VCProps}/>)

    expect(wrapper.contains(ThreatsBlurb)).toEqual(true)
  })

    it("should render a Malware threats component.", () => {
    const wrapper = mount(<VisualsContainer feed={VCProps}/>)

    expect(wrapper.contains(MalwareBarChart)).toEqual(true)
  })

})
