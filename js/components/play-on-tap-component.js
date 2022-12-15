///////////////////////////////////////////////
//
//   Component that plays audio or video
//   after user click our "Enter AR" button
//
///////////////////////////////////////////////

AFRAME.registerComponent("play-on-tap", {
  schema: {
    // Initial data for our component
    // To chanage this data pass a message property when
    // attaching the component -> template="message: whats up!"
    button: { type: "selector" },
    media: { type: "selector" },
  },
  init: function () {
    // Called when scene is initialized
    this.btn = this.data.button;
    this.media = this.data.media;
    this.btn.addEventListener("click", (e) => {
      this.media.play();
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
