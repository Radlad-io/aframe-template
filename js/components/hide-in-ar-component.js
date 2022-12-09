///////////////////////////////////////////////
//
//   Component that hides element when AR is activated
//
///////////////////////////////////////////////

export const hideInARComponent = {
  schema: {},
  init() {
    this.el.sceneEl.addEventListener("enter-vr", (ev) => {
      if (this.el.sceneEl.is("ar-mode")) {
        this.el.setAttribute("visible", false);
      }
    });
    this.el.sceneEl.addEventListener("exit-vr", (ev) => {
      this.el.setAttribute("visible", true);
    });
  },
};
