# _Club Manager_

#### _An application that helps users view and filter Boys and Girls Club locations. September 22, 2017_

#### By _**Lois Choi**_

## Description

_This application allows users to view and filter Boys and Girls Clubs in the Seattle area. Administrators can add, edit, and/or delete a club._

## User Story Specifications (BDD)
_1. Download github repository: <a>https://github.com/loisch22/club-manager.git</a>_
_2. API key:
<br>
`export var masterFirebaseConfig = {
  apiKey: "AIzaSyATlBUnPZJb_VXhTOQpPG0o1zVxo_PA7l8",
    authDomain: "club-manger1.firebaseapp.com",
    databaseURL: "https://club-manger1.firebaseio.com",
    projectId: "club-manger1",
    storageBucket: "club-manger1.appspot.com",
    messagingSenderId: "188297789693"
  };`

## User Story Specifications (BDD)

| Behavior | Input | Output |
| :---         |     :---:      |          ---: |
| 1. User can view all Boys and Girls Club on the home page | View home | List of all clubs |
| 2. User can click an About link to read about the website | `click` About | View About page |
| 3. User can click on a club and view it's profile/details | `click` Sacajawea Boys and Girls Club | View profile page
| 4. Administrators can add a new club and the new club should show on the home page once created | `click` Add Club | Form to add a new club |
| 5. Administrators can edit a clubs information and the new information should be posted on the home page | `click` edit | Form to edit a new club |
| 6. Administrators can delete a club | `click` delete | Confirmation to delete - Club is deleted from list |

## Wishlist
Have `add club` button in admin view NOT navbar.
Need to be able to add new club.
Need to be able to filter using pipes.

# ClubManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
