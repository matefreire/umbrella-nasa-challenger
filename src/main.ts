import { createApp } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import App from './App.vue';
import './assets/main.css';

const app = createApp(App);
app.use(VueApexCharts);
app.component('ApexChart', VueApexCharts);
app.mount('#app');
