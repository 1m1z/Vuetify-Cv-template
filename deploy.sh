#!/usr/bin/env sh
set -e

npm run build

cd dist
ssh-agent -s
ssh-add ~/.ssh/id_rsa
git init 
git add -A
git commit -m 'New Deplyment'
git push -f https://github.com/AMiRZzZzZz/Vuetify-Cv-template.git main:gh-pages
cd -