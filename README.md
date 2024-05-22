# FWDThink Developer exercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Table of Contents

	1. Description
  2. What this project demonstrates about me
  3. How to run this project locally
  4. How to build this project
  5. Further help

## 1. Description

This project is a Developer exercise designed and developed by Anthony Faust for the purpose of showcasing his front-end development and software engineering skills. I used the Angular 17 framework because of my familiarity with its robust approach and its scalable and usability features. 

I made the following decisions when developing this project.

1. I decided to use Bootstrap to streamline the user interface design and to make the application responsive.
2. I created a service layer to hold services I custom created for the application.
3. I created a data layer to hold the json files which contain encapsulated data.
4. I used Reactive Forms in Angular to bind the user input with the form data I used to populate the dropdown menus and the ticket details summary page.
5. I used interfaces to impose type safety on my components, thereby reducing the risk of run-time errors.

Ideally, when the user submits the form data, that data will be persisted on the through a database or server side storage. Then, when the user visits the Ticket Details Summary page, the data is fetched through an API call to ensure the data is what was previously sent to the database. We can do this with noraml CRUD operations, but for this exercise, the data was persisted locally.

## 2. What this project demonstrates about me

First, this project allowed me to showcase my technical prowess and strong understanding of best development practices for user interface design. The application is responsive and is bootstrapped with the latest version of the Bootstrap library.

Second, I demonstrated my understanding of modularity by creating components with a single responsibility rule, thus maximizing the components ability to be reused again, which is a hallmark of modern web frameworks like Angular, ReactJS, and Vue.

Third, I wrote JavaScript to mutate and modify data as needed to satisfy the project requirements. The code is documented nicely and has properties, methods, and variables that are camelCased and written declaratively to help other developers understand their intent.

## 3. How to run this project locally

Run `npm start` for a dev server. This command will automatically open `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 4. How to build this project

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 5. Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
