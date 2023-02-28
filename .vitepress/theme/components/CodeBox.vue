<template>
  <div
    v-if="lang.toLowerCase() === langFromQuery"
    class="rounded-lg my-5 grid gap-6 md:grid-cols-2 grid-cols-1"
    :style="dir === 'rtl' ? 'direction:rtl' : ''"
  >
    <div class="col-span-1">
      <slot />
      <span class="text-xs schema">
        <ul>
          <slot name="params" />
        </ul>
      </span>
    </div>
    <div class="col-span-1">
      <section
        class="flex justify-between flex-row p-2 text-black dark:bg-gray-700 bg-gray-200 rounded-t-lg"
      >
        <div class="text-white endpoint sticky top-0 z-1">
          <span :class="checkMethod" class="font-bold">{{ method }}&nbsp;</span>
          <span class="dark:text-gray-200 text-gray-700">{{ endpoint }}</span>
        </div>
        <div class="relative">
          <button
            v-show="!showDropDown"
            @click="showDropDown = true"
            class="flex flex-row px-3 py-1 rounded-md dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-0"
          >
            <span class="mr-1">{{ lang }}</span>
            <svg
              class="w-5 h-5 mt-1 dark:text-white text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            v-show="showDropDown"
            @click="showDropDown = false"
            class="flex flex-row px-3 py-1 rounded-md dark:bg-gray-800 dark:text-gray-300 text-gray-800 border-0"
          >
            <span class="mr-1">{{ lang }}</span>
            <svg
              class="w-5 h-5 mt-1 text-white text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            v-show="showDropDown"
            ref="dropDownItems"
            class="absolute right-0 py-2 mt-2 rounded-md shadow-xl z-10 dark:bg-gray-800 bg-gray-200 text-gray-800"
          >
            <div
              :value="item.name"
              v-for="(item, index) in labraries"
              v-show="item.name.toLowerCase() !== langFromQuery"
              class="block px-4 py-2 text-sm hover:bg-gray-700 dark:text-gray-300 cursor-pointer"
              :key="index"
              @click="toggleTabs(item.name, $event)"
            >
              <span>
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        class="code-section flex justify-between flex-col p-2 dark:bg-gray-800 text-gray-800 bg-gray-50 rounded-b-lg max-h-screen"
      >
        <slot name="code" />
      </section>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";

import { useData, useRouter } from "vitepress";
import { computed, nextTick } from "@vue/runtime-core";
import { labraries } from "./composables/useLabraries";
import { onClickOutside } from "@vueuse/core";
export default {
  name: "CodeBox",

  props: {
    lang: { type: String },
    method: { type: String },
    endpoint: { type: String },
  },
  setup(props, { slots }) {
    const { dir } = useData();
    const router = useRouter();
    const showDropDown = ref(false);
    const dropDownItems = ref(null);
    const loading = ref(true);

    const langFromQuery = ref("");

    onMounted(() => {
      nextTick(() => {
        loading.value = false;
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        langFromQuery.value = params.lang;
      });
    });
    function toggleTabs(name, { pageY }) {
      showDropDown.value = false;
      router.go(
        `${router.route.path}?lang=${name.toLowerCase()}&pos=${pageY - 100}`
      );
      nextTick(() => {
        window.location.reload();
      });
    }

    onClickOutside(dropDownItems, () => {
      showDropDown.value = false;
    });

    // Change color for each method
    const checkMethod = computed(() => {
      switch (props.method) {
        case "POST":
          return "text-green-400";
        case "GET":
          return "text-blue-400";
        case "PUT":
          return "text-yellow-500";
        case "PATCH":
          return "text-yellow-500";
        case "DELETE":
          return "text-red-400";
        default:
          return "text-sky-500";
      }
    });
    return {
      dir,
      langFromQuery,
      toggleTabs,
      labraries,
      showDropDown,
      dropDownItems,
      checkMethod,
      loading,
    };
  },
};
</script>
<style>
.code-section div {
  width: 100%;
}
.method {
  color: deepskyblue !important;
}
.endpoint {
  font-family: monospace, monospace, sans-serif;
  font-size: 0.9em;
  color: #a3acb9;
}
</style>
