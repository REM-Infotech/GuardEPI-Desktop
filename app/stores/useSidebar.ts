export default defineStore("useSidebar", {
  state: () => ({ active: false }),

  actions: {
    show() {
      this.active = true;
    },

    hide() {
      this.active = false;
    },

    toggle() {
      this.active = !this.active;
    },
  },
});
