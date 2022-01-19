import store from "@/store";

export default new (class ReadToken {
  parseToken() {
    const token = localStorage.getItem("token");
    const split = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const buff = new Buffer(split, "base64");
    const payload = JSON.parse(buff.toString("ascii"));
    store.commit("set_user", payload);
    console.log(store.getters.getUserData);
  }
})();
