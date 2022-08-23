import { defineStore } from 'pinia';

export const useUserInfoStore = defineStore({
  id: 'userInfo',
  state: () => ({
    name: null,
    authToken: null,
    email: null,
    picture: null,
  }),
  actions: {
    setName(name) {
      this.name = name;
    },
    setEmail(email) {
      this.email = email;
    },
    setToken(token) {
      this.authToken = token;
    },
    setStore(userInfo) {
      Object.assign(this, userInfo);
    },
    saveStore() {
      sessionStorage.setItem(
        'ezSystems.ezProject110.userInfo',
        JSON.stringify(this.$state)
      );
    },
    loadStore() {
      const userInfo = sessionStorage.getItem(
        'ezSystems.ezProject110.userInfo'
      );

      if (userInfo) this.setStore(JSON.parse(userInfo));
    },
    clearStore() {
      this.$reset();
      sessionStorage.removeItem('ezSystems.ezProject110.userInfo');
    },
  },
});
