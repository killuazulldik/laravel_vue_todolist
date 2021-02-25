import Vue from "vue";
import VueRouter from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlusSquare, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

import Dashboard from "./components/Dashboard.vue";

const routes = [{ path: "/", component: Dashboard }];

const router = new VueRouter({
    mode: "history",
    routes
});

new Vue({
    router,
    render: h => h(Dashboard)
}).$mount("#app");
