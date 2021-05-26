## :boom: ThreatBoom :boom:


READ ME FIRST
==============
The ransomware tracker that was used to build the visualizer shut down in December 2019.

This project could be easily hooked up to another data feed. Also, this project is left intentionally vulnerable to aid in testing security products
-----

An visualization tool for ransomware.

With ransomware on the rise, visualizing the most popular types, where they are coming from, and more can help teach users about ransomware.

Threatboom uses [React](https://reactjs.org/) for it's front-end & Node.js ([Express](https://expressjs.com/)) for the backend. 

The backend setup instructions for local setup can be located in a different [branch](https://github.com/malexanderboyd/ThreatBOOM/tree/withBackend), this master branch is purely the front-end setup.


[Heroku Version](https://gentle-tundra-93966.herokuapp.com/)


## How to Start

```
git clone https://github.com/malexanderboyd/ThreatBOOM.git
cd threatboom
npm install
npm start
```

Please give the backend time to wake up (heroku) on first start up, other refreshes should be instant.











## Testing

[Travis CI](https://travis-ci.org/malexanderboyd/ThreatBOOM)


## Resources


[react-tooltip](https://www.npmjs.com/package/react-tooltip)

[react-simple-maps](https://github.com/zcreativelabs/react-simple-maps)

[react-svg-piechart](https://github.com/xuopled/react-svg-piechart)

[Recharts](http://recharts.org/#/en-US/)

[React Table](https://react-table.js.org/#/story/readme)

[SuperTest](https://github.com/visionmedia/supertest) (Integration Testing)

[Enzyme](https://github.com/airbnb/enzyme) (Unit Testing)

Data used: [Abuse.ch Ransomware Tracker](https://ransomwaretracker.abuse.ch/tracker/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
