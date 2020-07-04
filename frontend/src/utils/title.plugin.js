export default {
  install(Vue) {
    Vue.prototype.$title = function(titleKey) {
      const appName = "Eco-z";
      return `${appName} | ${titleKey}`;
    };
  },
};
