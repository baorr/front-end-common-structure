# front-end-common-structure
1. Common structure for front-end developer, nodejs developer, full-stack developer

## Basic Structure:
![image](https://github.com/baorr/front-end-common-structure/blob/master/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E9%80%9A%E7%94%A8%E6%9E%B6%E6%9E%84%E5%9B%BE.png)

2. Project Structure
--app (for backend service)
--config (config for different dev-envirentment)
--i18n (Intenational)
--swagger-ui (virtual API operation)
--test (for UI test, API test, Use mocha)
--web (for forntend service)
--build.js (for build the forntend service, Use webpack config for Reactjs/Vue etc.)
--local.js (for local test, Use webpack-dev-middleware)
--package.json
--README.md

## use it
#### Install all the Dependencies.
npm i;

#### Build the source code
npm run build

#### Run local dev server
##### step 1: npm run local
##### step 2: http://localhost:3000/

## Test
npm run test

## Swagger-ui for virtual API test
http://localhost:3000/swagger

## resource
1. swagger api: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md

## tips
#### 1. ln[command] not permission, solution is https://segmentfault.com/q/1010000003958979
