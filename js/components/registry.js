///////////////////////////////////////////////
//
//   Registers all components with AFrame
//
///////////////////////////////////////////////

import { templateComponent } from "./template-component.js";
// import { hideInARComponent } from "./hide-in-ar-component.js";
import { playInARComponent } from "./play-in-ar-component.js";

AFRAME.registerComponent("template", templateComponent);
// AFRAME.registerComponent("hide-in-ar", hideInARComponent);
AFRAME.registerComponent("play-in-ar", playInARComponent);

console.log("Component library registered");
