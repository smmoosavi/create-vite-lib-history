#/bin/bash
rm -rf the-lib
rm -rf the-react-lib
rm -rf vite-vanilla-app
rm -rf vite-react-app

PARENT_DIR=$(dirname "$(realpath "$0")")

../create-vite-lib/index.js lib the-lib 2>&1 | tee lib-output
../create-vite-lib/index.js react-lib the-react-lib 2>&1 | tee react-lib-output

echo "create-vite@$(pnpm info create-vite version )\n" | tee vite-app-output

# template-vanilla-ts
echo "--- vanilla-ts ---\n" | tee -a vite-app-output
pnpm create vite vite-vanilla-app --template vanilla-ts 2>&1 | sed "s|${PARENT_DIR}|.|g" | tee -a vite-app-output

# template-react-ts
echo "--- react-ts ---\n" | tee -a vite-app-output
pnpm create vite vite-react-app --template react-ts 2>&1 |  sed "s|${PARENT_DIR}|.|g" |tee -a vite-app-output

