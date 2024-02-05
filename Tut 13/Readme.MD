/*
Header
  Logo
  Nav Items
Body
  Search
  RestaurentContainer
    RestaurentCard
      Img
      Name of Res, Star Rating, Cuisine delivery time
  Footer
    Copyright
    Links
    Address
    Contact
*/

Render components

  {/* <RestaurentCard resName = "Meghna Foods" coisine="Biryani, North Indian, Asian" ratings="4.4 stars" delTime="38 miutes"  />
    <RestaurentCard resName = "KFC" coisine="Burger, Fast Food" ratings="4.2 stars" delTime="44 minutes" /> */}
    {/* <RestaurentCard data={data2[0]} />
    <RestaurentCard data={data2[2]} /> */}
    {/* <RestaurentCard resData={resList} /> */}
    {/* OR */}
    {
        resList.map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))
    }


# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our own store
 - Connect our store to app
 - Create Cart Slice
 - dispatch (Actions)
 - Selector

 #                                        Setting up testing in our React app using Parcel
 - Install React Testing Library.  npm install -D  @testing-library/react
 - Install Jest                    npm install -D  jest
 - Install Babel Dependencies      npm install --save-dev babel-jest @babel/core @babel/preset-env
 - Configure Babel.                Create file .babel.config.js in root directory of your project.
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
 - Configure parcel config file to disable default babel transpiler.
 Go to https://parceljs.org/languages/javascript/#babel
 Create .parcelrc file in root directory of your project
 {
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
} 
 - jest configuration - npx jest --init
 - Install jsDOM Lib -  npm install --save-dev jest-environment-jsdom
 https://testing-library.com/docs/react-testing-library/setup#jest-28
 
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside babel configuration (babel.config.js) 
    presets: [["@babel/preset-react", { runtime: "automatic" }]]
 - Install @testing-library/jest-dom - npm i @testing-library/jest-dom  