# React Touch Knob
A canvas-based, ReactJs Knob optimized for both mouse and touch events with support for responsive design and CSS styling.
### Installation
```
npm install react-touch-knob
```
### Usage
Assuming you are using react and react-dom:
```
import TouchKnob from "react-touch-knob"

<Touch Knob
    class="my-knob-class"
    name="score"
    min="0"
    max="100"
    value="44"
    onChange={this.handleChange}
    onEnd={this.handleEnd}
    showNumber={true}
    />
```

TouchKnob contains a hidden input[type=number] element, so that it can be used within a form in a familiar way.

TouchKnob can be styled using existing CSS properties, repurposed for this component:

```
.my-knob-class {
    width: 100px; /* the canvas's width and height will be based only on the width of the element */
    height: 100px; 
    font-size: 2vw; /* font-size of the text output */
    line-height: 22%; /* width of the knob's "lane" */
    border-bottom-color: #ccc; /* background color of "lane" */
    border-top-color: "blue"; /* color of knob's value indicator */
}
```

TouchKnob can be included in a responsive design with one caveat: if there is a CSS transition on the width of the knob element (or on a parent element that subsequently affects the width of the knob), the knob's canvas element will not resize properly.
### Properties
* min: The minimum value of the knob (default: 0)
* max: The maximum value of the knob (default: 1)
* value: The current value of the knob (default: 0 or min)
* fineness: Affects the amount the knob moves when adjusting outside the "lane" for potentially fine adjustments -- higher values = finer adjustment (default: 10)
* class: The CSS class (note: do not use React's className property, here)
* name: The name attribute of the hidden input field
* showNumber: If true, show the current value of the knob in the center of the element (default: false)
* rounded: If true, draw lane and value indicator with rounded ends (default: false)
* disableAnimation: If true, disable animation on setValue method and when the knob is "flung" (default: false)
* disabled: If true, knob is read-only (default: false)
### Methods
* getValue(): Returns the knob's value (note: during an animation, this value is changing)
* setValue(value, disableAnimation): Set the value of the knob with option to disable animation if it isn't already disabled via the disableAnimation property
### Events
* onChange: Returns the knob's value whenever that value is changed
* onEnd: Returns the knob's value after an adjustment is complete (on mouseup, touchend, or at the end of an animation)
* valueTransformDisplay: Returns the knob's value whenever that value is changed. You may then transform and return that value to a string for display if showNumber is true; i.e., round the value to a certain precision, append a string to the end of the number, etc. This does not affect the actual value, only the way it is displayed. 
### User Interaction
TouchKnob can be adjusted directly by starting a mousedown or touch in the knob's lane and dragging circularly around the knob. Additionally, for potentially finer adjustments and to avoid sudden value changes, a mousedown or touch in the center of the knob (without touching the lane), followed by dragging up or to the right increases the knob value, while dragging down or to the left decreases it. A fast adjustment will "fling" the knob, animating to a value based on the momentum of the fling unless the disableAnimation property is set to true.
### Examples
Coming soon...
