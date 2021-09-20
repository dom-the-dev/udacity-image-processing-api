# Image Processing API
### Project #1 - Full Stack JavaScript Developer Nanodegree

Image processing API, uses query parameters to serve resize images.
In order to get an image you need to provide the filename, and also the wanted width **and** height via url query parameters. 
If one param is missing, you get an information about the missing parameter.
If neither width nor height is specified the server will serve the original size image.
In the frontend we placed a form available for better user experience.

Example Url with parameters: 
`http://localhost:3000/api/image?filename=fjord&width=200&height=100`

### API Path
`/api/image`

### Available parameters

| Parameters |  |  |
| ------------------ | ------------------ |  ------------------ |
| filename | any image name listed below | required|
| width | set any image width | optional |
| height | set any image height | optional |

### Available filenames
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

## Getting started

1. Clone this repository `git clone https://github.com/dom-the-dev/udacity-image-processing-api.git`
2. Cd into project directorry `cd  udacity-image-processing-api`
3. Install dependencies `npm install`
4. Build application `npm run build`
5. Start server `node build/app.js`
6. Visit `http://localhost:3000/`

## Development

- rum `npm run start` to start development server
- all files are places in `src` 
- public files are places in `public`

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

## Dependencies
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Sharp](https://www.npmjs.com/package/sharp)
- [TypeScript](https://www.typescriptlang.org/)

## Resources useful links
- [Node Docs](https://nodejs.org/api/fs.html)
- [TypeScript Docs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Prettier Docs](https://prettier.io/)
- [Sharp NPM](https://www.npmjs.com/package/sharp)
- [Travery Media TypeScript Crash Course](https://www.youtube.com/watch?v=BCg4U1FzODs&t=1260s)
