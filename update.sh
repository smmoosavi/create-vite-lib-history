#/bin/bash
rm -rf the-lib
rm -rf the-react-lib

../create-vite-lib/index.js lib the-lib '' 2>&1 | tee lib-output
../create-vite-lib/index.js react-lib the-react-lib '' 2>&1 | tee react-lib-output
