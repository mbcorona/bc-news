# PWA | BC-NEWS
Hello visitor, here you will find a basic template of a Progressive Web App, this PWA shows the latest news of technology, and uses *News API* (https://newsapi.org) to request the information.

This repo is conformed by 4 branches:
* app-shell: Includes the basic structure of a web app. (HTML,JS,CSS)
* service-worker: app-shell + implementation of a service worker
* web-manifest: service-worker + implementation of web manifest
* master: Includes all

## Getting Started
### What is the App Shell ?
The app "shell" is the minimal HTML, CSS and JavaScript required to power the user interface and when cached offline can ensure instant, reliably good performance to users on repeat visits. This means the application shell is not loaded from the network every time the user visits. Only the necessary content is needed from the network.- [Addy Osmani](https://developers.google.com/web/fundamentals/architecture/app-shell)

### The service worker
A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction,  is a programmable network proxy, allowing you to control how network requests from your page are handled. - [Matt Gaunt](https://developers.google.com/web/fundamentals/architecture/app-shell)

### The web manifest
The web app manifest is a simple JSON file that tells the browser about your web application and how it should behave when 'installed' on the users mobile device or desktop. - [Matt Gaunt](https://developers.google.com/web/fundamentals/architecture/app-shell)

## Authors
* **Bruno Corona**
