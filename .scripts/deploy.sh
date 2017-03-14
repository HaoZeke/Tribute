#!/bin/bash

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

cd public
#rm -rf .git

git init
git config user.name "HaoZeke"
git config user.email "rohit@myarchbox.com"

git remote add upstream "git@github.com:HaoZeke/Tribute.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
rm -rf .git