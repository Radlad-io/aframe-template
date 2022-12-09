///////////////////////////////////////////////
//
//   Registers all components with AFrame
//
///////////////////////////////////////////////

import { templateComponent } from "./template-system.js";

AFRAME.registerSystem("template", templateComponent);

console.log("Systems registered");
