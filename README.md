# Basic Web Project

An application base folder for creating apps with Node.js (io.js), Angular.js, Bootstrap and other with LiveEdit testing on browser in real time.

### Prerequisites for the project to work
- You need [Node.js](http://nodejs.org/) or [io.js](https://iojs.org/)
- Install [Gulp.js](http://gulpjs.com/) to automate and enhance your workflow.
- Install [Bower](http://bower.io) - a package manager for the web. For installing angular, bootstrap etc

### Steps to install and run the project

#### 1. In your console or your favourite Git GUI you need to clone the repo:
https://github.com/brankoleone/BasicWebProject.git


In your terminal go to the folder where you want to install the basic web project and type

```
:$ git clone https://github.com/brankoleone/BasicWebProject.git 'Name of your project'
```

#### 2. Go to your project folder in the terminal and type:

```
:$ npm init
```

Fill the information you want or leave it as default, then go to step 3.

#### 3. Install the *gulp.js* modules in *node_modules* by typing in the terminal:

```
:$ npm install
```

***Note***: sometimes you may have to be the root of the console so use *'sudo npm install'* instead.

#### 4. Run the *gulp* script to install libraries and resources in *pub/lib/*

```
:$ gulp install:lib
```

#### 5. Run the gulp script to run the server and begin building your project

```
:$ gulp server
```

