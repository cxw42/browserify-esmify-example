# browserify-esmify-example

Example of using esmify to support ES6 import syntax in browserify.  Also shows including UMD modules!

## Running

    npm install
    npm run build
    
Then open `example.html` in a browser.  You should see a spinner.  If you
open the developer console, you will be able to access a window global called
`Multidex`.

## License

MIT, except for `lib/multidex.js`, which has its own license.
