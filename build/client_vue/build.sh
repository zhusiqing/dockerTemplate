#!/bin/bash

cd /usr/app
yarn
yarn build
tar -czf dist.tar.gz ./dist
