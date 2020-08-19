# react-symfony-cookie-bakery

### A cookie bakery web app developed with [ReactJS](https://reactjs.org/) , [Symfony](https://symfony.com/), [Bootstrap](https://getbootstrap.com/), [Webpack bundler](https://webpack.js.org/) and [SQLite](https://www.sqlite.org/index.html)

### Requirements

To use this project, you need to setup the following environment.

## Getting Started

Install [NodeJs](https://nodejs.org/) and [Yarn package manager](https://yarnpkg.com/) (if you haven't already).

Install [Composer - dependecy manager for PHP](https://getcomposer.org/) and setup [Symfony](https://symfony.com/doc/current/setup.html) (check for reuirements).

### Get the source code and install dependencies.

```
$ git clone git@github.com:sra1rdy/react-symfony-cookie-bakery.git | https://github.com/sra1rdy/react-symfony-cookie-bakery.git
$ composer install
$ yarn install
```
This will setup the project with all the required dependencies. You can configure the project further with your environment variables for 
database in a `.env` file.

### Run the project locally

Webpack-encore is used to watch and run the project. Also, start the server either using the PHP | Symfony CLI (if you configured symfony command line tool).
 

```
$ yarn dev
$ php -S 127.0.0.1:8000 -t public | symfony server:start | php bin/console server:start
```

### Extras

 - Source code for Frontend (react | HTML, CSS, JS) located in `assets` folder. To customize navigate to
 
 ```
 cd assets/
 ```
 
 - Source code for Backend (symfony | PHP) located in `src` folder. To customize navigate to
 
 ```
 cd src/
 ```
 #### Dependencies to mention
 
 - [Bootstrap-Styled](https://github.com/bootstrap-styled/v4) >> [Bootstrap](https://getbootstrap.com/) + [Styled Components](https://styled-components.com/)
 - [nelmioCorsBundle](https://github.com/nelmio/NelmioCorsBundle)
 
 
 ##[Stay Safe!](https://sravan-reddy-jeedipelly-dev.netlify.app/)
 
 
 
 
 
 
