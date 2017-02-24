# HTML5, Bootstrap, SASS starter kit
This is a starter kit based off the standards of the web, 
and packed with tools that make working with the Front End quick and easy.

## Tools
* Bootstrap (normal and sass)
* jQuery
* Font Awesome
* SASS
* Gulp
* Browser-Sync

## Get Started

Clone this repository and open up the Command-line at the root of the project.
And use npm to install the developer dependencies.

```
    npm install
```

### Using the Gulp File
This project has two main folders, ``app_src`` and ``app_dest`` and we're using gulp to
preprocess the SASS and Pipe the files to ``app_dest`` for a cleaner work environment.

#### Gulp Tasks
* default - SASS, browserSync, bootstrap, html-pipe
* watch - Keeps watch of changes and updates browser
* sass - process scss to css
* browserSync - updates browser on save
* bootstrap - grabs from npm modules and puts them into ``app_dest``
* bootstrap-sass - takes sass from modules and converts to css in ``app_dest`` *(only useful with direct edit in modules)*

## Favicons
The Favicons are made using [http://realfavicongenerator.net/](http://realfavicongenerator.net/) 