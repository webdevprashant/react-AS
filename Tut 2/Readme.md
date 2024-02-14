Initialize npm - npm init -y
Install react react-dom - npm i react react-dom
CDN - Remove from index.html if exist
Install parcel - npm i parcel -D
Ignite your app - npx parcel index.html
add start, build script in package.json
build - parcel index.html (DEV Build) , parcel build index.html (PROD Build)
Create .gitignore and add build, dist, node_module, .parcel-cache folder
add browserlists in package.json
"browserslist": [
    "last 2 Chrome version",  // browsers that support your project only
    "last 10 Firefox version",
]

Build Prod build - parcel build index.html