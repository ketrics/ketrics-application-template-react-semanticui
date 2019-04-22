
## Create project from 0
    npm init -y
    mkdir src
    touch src/index.html src/index.js
    touch webpack.prod.js webpack.dev.js
    touch README.md
    npm i -D webpack webpack-cli webpack-dev-server
    npm i -D path html-webpack-plugin
    npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
    npm i -D style-loader css-loader sass-loader
    npm i -D file-loader @babel/plugin-proposal-class-properties
    npm i -D clean-webpack-plugin compression-webpack-plugin uglifyjs-webpack-plugin

    npm i -S react react-dom semantic-ui-css semantic-ui-react    
