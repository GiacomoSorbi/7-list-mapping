# LEARNING REACT 7 - LIST MAPPING

React Introduction

## Installation

Clone this repository and use `npm start` in your terminal to make it start

## Activities and Objectives

You are tasked to create a `MenuBar` component that gets populated from an array of objects including option name, classes, action on click and status as enabled/disabled.

Disabled buttons should appear greyscaled and even when associated with an action, that should not be triggered.

Examples:

```
const menuItems = [
  {title: 'Home', classes: 'menu-main', action: () => {setState({display: 'home'})}, status: 'enabled'},
  {title: 'Our products', classes: 'menu-opt', action: () => {setState({display: 'products'})}, status: 'enabled'},
  {title: 'About us', classes: 'menu-opt', action: () => {setState({display: 'aboutUs'})}, status: 'enabled'},
  {title: 'Special offers', classes: 'menu-opt', action: () => {setState({display: 'specialOffers'})}, status: 'disabled'}
];
```

## Extra notes and tips

How would you manage different classes bases on the status of the button?

How would you implement the change of status for a given item?

How would you make the currently active button not clickable again?

Can you think of any scenario [ie: multiple clicks on the same button, fast clicks on different buttons, etc] in which this solution would give you troubles?
