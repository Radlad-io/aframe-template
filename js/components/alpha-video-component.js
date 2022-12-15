///////////////////////////////////////////////
//
//   Component that plays audio or video
//   after user click our "Enter AR" button
//
///////////////////////////////////////////////

import "aframe-chromakey-material";
AFRAME.registerComponent("alpha-video", {
  schema: {
    // Initial data for our component
    // To chanage this data pass a message property when
    // attaching the component -> template="message: whats up!"
    // button: { type: "selector" },
    // media: { type: "selector" },
  },
  init() {
    const { el } = this;
    console.log(el);
    const alphaVideo = el;
    alphaVideo.removeAttribute("play-video");
    alphaVideo.removeAttribute("material");
    alphaVideo.setAttribute("play-video", {
      video: "#alpacaSrc",
      autoplay: "true",
    });
    alphaVideo.setAttribute("material", {
      shader: "../materials/",
      src: "#alpacaSrc",
      color: "0.1 0.9 0.2",
      side: "double",
      depthTest: "true",
    });
  },
  update() {
    // Called when component is attached
  },
  tick(time, timeDelta) {
    // Called on every frame
  },
  remove() {
    // Can be setup to remove the component, logic or something from the scene
  },
  pause() {
    // Called when the entity or scene pauses
  },
  play() {
    // called when the entity or scene resumes
  },
  multiple: false,
});
