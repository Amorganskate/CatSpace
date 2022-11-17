import { createApp, onMounted } from "vue";
import App from "./App.vue";
import router from "./router";
import catfeed from "./dummy_data/cat_feed.json";

import "./main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
function save_to_local_json(items) {
  var items_json = JSON.stringify(items);
  console.log(catfeed);
  localStorage.setItem("cat_feed", items_json);
}

onMounted(() => {
  save_to_local_json(catfeed);
});
