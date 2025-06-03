#/bin/bash
rm -rf the-lib
rm -rf the-react-lib
rm -rf the-vite-app

PARENT_DIR=$(dirname "$(realpath "$0")")

../create-vite-lib/index.js lib the-lib 2>&1 | tee lib-output
../create-vite-lib/index.js react-lib the-react-lib 2>&1 | tee react-lib-output

echo "create-vite@$(pnpm info create-vite version )\n" | tee vite-app-output
pnpm create vite the-vite-app --template react-ts 2>&1 |  sed "s|${PARENT_DIR}|.|g" |tee -a vite-app-output

