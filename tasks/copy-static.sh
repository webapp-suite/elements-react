#!/bin/bash -eu
rm -rf static/

# Copy *.css from @webapp-suite/elements
mkdir -p static
mkdir -p static/packages
mkdir -p static/packages/core
mkdir -p static/packages/core/src
find node_modules/@webapp-suite/elements/src/ -name '*.css' -exec cp -prvf '{}' 'static/packages/core/src' ';'

# Copy assets from storybook
mkdir -p static/storybook/images
find .storybook/images -exec cp -prvf '{}' 'static/storybook' ';'

# Copy the test icon for a header storybook story.
# cp -pvf *.svg static/

# Copy webcomponentsjs polyfill
# mkdir -p static/node_modules
# mkdir -p static/node_modules/@webcomponents
# mkdir -p static/node_modules/@webcomponents/webcomponentsjs
# cp -prvf node_modules/@webcomponents/webcomponentsjs static/node_modules/@webcomponents/
