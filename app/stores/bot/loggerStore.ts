export default defineStore("loggerStore", () => {
  const botNamespace = socketio.socket("/bot");

  return { botNamespace };
});
