///////////////////////////////////////////////
//
//   Main Javascript file
//
///////////////////////////////////////////////

// Sets a global variable on the window defining our environment
window.isDev = window.location.hash === "#dev" ? true : false;

// Add all of our AFrame Components to our App
import "./components/play-on-tap-component.js";
import "./components/alpha-video-component.js";

if (!window.isDev) {
}
