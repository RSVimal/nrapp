import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
import firebase from 'nativescript-plugin-firebase';
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import DateTimePicker from "nativescript-datetimepicker/vue";
import FloatLabel from './components/FloatLabel';

Vue.component('FloatLabel', FloatLabel);

Vue.use(DateTimePicker);
Vue.use(RadSideDrawer);
Vue.use(Navigator, { routes })

Vue.registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


firebase
	.init({
		// Optionally pass in properties for database, authentication and cloud messaging,
		// see their respective docs.
	})
	.then(
		instance => {
			console.log('firebase.init done');
		},
		error => {
			console.log(`firebase.init error: ${error}`);
		}
	);


new Vue({
  store,
  render: h => h(App)
}).$start()
