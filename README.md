# Meanbean

How to use
----------

Run "npm install" inside this project folder to install all dependencies.

To run this project, make sure to run ng serve to start the angular project up on localhost:4200
NEXT, to run the express server, enter 
''' 
npm run start:server
'''

This project also utilizes MongoDB, make sure to create your own cluster and connect it to the application in order to fetch/create posts. The file is located in the backend folder/ app.js.  
Make sure to enter the correct url to connect to mongodb and your required password.



# ABOUT

This project runs the MEAN stack, MongoDb, Express, Angular, and Node. All common frameworks built upon javascript. The entire project is ran in javascript making it a very popular stack to use. This project will allow the user to create a post, edit the post, and delete the post. After the post is created, the post is saved on the mongodb database. When the user goes to view the posts/messages on the front page, the server will fetch the data and send it to angular to process and display. It is important that you run the localhost server for angular, as well as the express server and have it setup to connect to your specific mongodb cluster. A live version of this application will be made public in the future. Updates are still to come:) 




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# --NOTES--
```
v1. 	5/10/2020
		- Added basic messaging board app with mongoDB as the backend.
		- Added seperate page to allow for creation of post and viewing of posts seperately
		- Integrated CSS to allow for "accordian viewing" of each post title,
					with the click allowing for the content of the post.
		-Enabled each post to be edited and updated (Both on frontend and server side).
v2.0 	5/13/2020
		- Allowed for image uploading to application for each message/post.
		- Enabled editing an exisiting post to change images.
```