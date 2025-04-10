import { createApp } from "vue"

import App from "./App.vue";
import TaskComponent from "./components/TaskComponent.vue";
import ListComponent from "./components/ListComponent.vue";

const app = createApp(App);

app.component("task", TaskComponent);
app.component("task-list", ListComponent);
app.mount("#app")
