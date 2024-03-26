import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; // Import library
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

library.add(fas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');