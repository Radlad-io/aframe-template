///////////////////////////////////////////////
//
//   System that hides element when AR is activated
//
///////////////////////////////////////////////

export const templateComponent = {
  schema: {},
  init() {
    // Called when scene is initialized
    console.log("Template system registered");
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
};
