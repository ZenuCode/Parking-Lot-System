# ParkingLotSystem

## Description
Created System Design - Parking Lot System
Link: https://medium.com/double-pointer/system-design-interview-parking-lot-system-ff2c58167651

Angular Aspects
- Single Page 4 Component Application
- Sibling Data Communication with Observables & Subscriptions between components
- 2 Way Data Binding for HTML & TypeScript for Immediate DOM Response
- Internal Backend for Data Storage
- Interface Management for Data Handling & Implementation with Date, Probability & Conditionary.
- Angular Life Cycle’s handled initialization/destruction, change detection optimization & component interaction.


Functional Aspects & Guidelines
- The parking lot includes multiple entry and exit points.
- Multiple parking floors are available.
- Each floor carries multiple rows of parking slots.
- The parking lot supports parking of different types of vehicles, including motorcycles, cars, and buses.
- The parking lot has motorcycle parking spots, compact spots, and large spots.
- The customer can collect a parking ticket from the entry point and pay the parking fee at any of the exit points.

Non-Functional Aspects & Guidelines
- Scale the system for 5k parking slots for a parking lot.
- The system should be able to handle 10k parkings per day.
- The system should have the capacity to hold ticketing information for, say, 10 years.

Further Improvements
- User Input for Direct Parking Space Registration

<img width="1279" alt="PL1" src="https://github.com/ZenuCode/Parking-Lot-System/assets/100235605/96ce11a6-7d05-4361-9c67-a6a512456be3">
<img width="1277" alt="PL2" src="https://github.com/ZenuCode/Parking-Lot-System/assets/100235605/db468591-c04a-4ba7-8779-d240bb5b6334">


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
