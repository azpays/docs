import { reactive } from "vue";

export let labraries = reactive<string[]>([]);
export const setLabraries = (data: string[]): void => {
  labraries = data;
};
