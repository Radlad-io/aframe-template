///////////////////////////////////////////////
//
//   Registers all components with AFrame
//
///////////////////////////////////////////////

import { templateComponent } from "./template-component.js";
import { hideInARComponent } from "./hide-in-ar-component.js";

AFRAME.registerComponent("template", templateComponent);
AFRAME.registerComponent("hide-in-ar", hideInARComponent);

console.log("Component library registered");
