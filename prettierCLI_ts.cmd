@echo off
echo Version
node node_modules\prettier\bin-prettier.js --version
node node_modules\prettier\bin-prettier.js --parser typescript --write %1
