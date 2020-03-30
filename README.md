

# Content build tool - Webpack
Run 'npm install' to install everything to get it working

## Development
Run 'npm run men' for normal development - change men to gender you want to run

## Production
Run 'npm run buildmen' to produce the "dist" folder with all the files needed to copy over to the cms - change men to gender you want

# Customisation - region

## Region Selector 
You can change the region inside - src/landing_pages/men/config/index.js - the target region class adder

# Entry points and importing

## Entry points
Inside src/landing_pages/men/config/entry.js - this contains all the the files which are being used for the page in development - you can add and remove them here by importing

## Importing js and sass for production
These are the files you want to use but not put into the bundle when you run production - you should put all shared code in here like saleBanner.js or a share sass file. Files you want to be exported through production you should 'import' through content.scss and/or 'script.js' in the local workspace for the page

## Webpack config files
Webpack runs from root so need to get full path when entering file location







# Problems
No Jquery yet
Nested mixins in media queries causing problems
Two Js errors which are always there but don't affect anything


