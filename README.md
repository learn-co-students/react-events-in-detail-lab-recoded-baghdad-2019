# React Events in Detail

## Overview

In this lab, you'll work with event data and persisting events. 

## Two Buttons To Rule Them All
![Using buttons](https://media.giphy.com/media/HraQGUYyPxDz2/giphy.gif)

In this lab, you'll be working on two components — two buttons, to be more precise. These aren't just regular buttons,
however! They both serve a very specific purpose.

### `CoordinatesButton`
1. In the `components/CoordinatesButton.js` file, create a `CoordinatesButton` React component.
2. This component takes in one prop: `onReceiveCoordinates`. This prop is a _function_.
3. When the button is clicked, create an array with two elements: the X and Y coordinates of the mouse. Find these using
the event data.
4. The `onReceiveCoordinates` callback prop is then called with these coordinates.

### `DelayedButton`
1. In the `components/DelayedButton.js` file, create a `DelayedButton` React component
2. This component takes two props: `onDelayedClick` (a function), and `delay` (a number).
3. When the button is clicked, we create an array with two elements: the X and Y coordinates of the button that you
retrieve using the event data.
4. The `onReceiveCoordinates` callback prop is then called with these coordinates.

## Resources

- [React Mouse Events](https://facebook.github.io/react/docs/events.html#mouse-events)
