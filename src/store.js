import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    cards: [],
    loading: true
});
