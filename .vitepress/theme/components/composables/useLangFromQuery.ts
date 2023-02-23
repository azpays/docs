import { onBeforeMount, ref } from "vue";
import type { Ref } from "vue";

export const useLangFromQuery = (): Ref<string> => {
  const langFromQuery = ref("");

  onBeforeMount(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    langFromQuery.value = params.lang;
  });
  return langFromQuery;
};
