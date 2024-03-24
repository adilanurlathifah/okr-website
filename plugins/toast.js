import Vue from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const options = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: 'button',
  icon: true,
  rtl: false
};

Vue.use(Toast, options);