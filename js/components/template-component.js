///////////////////////////////////////////////
//
//   Component template for reference
//
///////////////////////////////////////////////

export const templateComponent = {
  schema: {
    // Initial data for our component
    // To chanage this data pass a message property when
    // attaching the component -> template="message: whats up!"
    message: { type: "string", default: "Hi" },
  },
  init() {
    // Called when scene is initialized
    console.log(this.data.message);
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
};
