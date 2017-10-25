import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import fetch from 'isomorphic-fetch';


const serverURL = "https://mysterious-ridge-67938.herokuapp.com"


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


})
