import { reactive } from 'vue';

export const store = reactive({
    isNavOpen: true
});

export const mutations = {
    setIsNavOpen(yesno) {
        store.isNavOpen = yesno;
    },
    toggleNav() {
        store.isNavOpen = !store.isNavOpen;
    }
};