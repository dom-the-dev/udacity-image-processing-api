# Image Processing API
### Project #1 - Full Stack JavaScript Developer Nanodegree

Image processing API, uses query parameters to serve resize images.

Example: `http://localhost:3000/api/image?filename=fjord&width=200&height=100`

| Parameters |  |  |
| ------------------ | ------------------ |  ------------------ |
| filename | any image name listed below | required|
| width | set any image width | optional |
| height | set any image height | optional |

Available filenames
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

## Getting started

- Clone this repository `git clone https://github.com/dom-the-dev/udacity-image-processing-api.git`
- Cd into project directorry `cd  udacity-image-processing-api`
- Install dependencies `npm install`
- Build application `npm run build`
- Start server `node build/app.js`
- Visit `http://localhost:3000/`

## Available Script:

#### Run server
`npm run start`

#### Build application
`npm run build`

#### Build with TypeScript and run all Tests
`npm run test`

#### Run jasmine tests
`npm run jasmine`

#### Format code and run linter
`npm run format`

#### Run eslint
`npm run lint`

`npm run lint -- --fix` to apply fixes

#### Run prettier
`npm run prettier`
