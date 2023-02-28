import { h, watch, watchEffect } from "vue";
import Theme from "vitepress/theme";
import { inBrowser, useData, useRouter } from "vitepress";
import type { EnhanceAppContext } from "vitepress";
import "./style/main.css";
import "./style/vars.css";
import "./style/rtl.css";
import "./style/tooltip.css";
import "uno.css";

import {
  createMediumZoomProvider,
  usePageAnalytics,
} from "./components/composables";
import HomePage from "./components/HomePage.vue";
import CodeGroupItem from "./components/CodeGroupItem.vue";
import Response from "./components/Response.vue";
import SelectLibraries from "./components/SelectLibraries.vue";
import CodeBox from "./components/CodeBox.vue";
import { CodeGroup } from "./components/CodeGroup";

if (inBrowser) {
  import("./pwa");
}

export default {
  ...Theme,
  Layout() {
    return h(
      Theme.Layout,
      {
        class: useData().dir.value === "rtl" ? "rtl" : "",
      },
      {
        "home-features-after": () => h(HomePage),
      }
    );
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    createMediumZoomProvider(app, router);
    usePageAnalytics("G-V5E08LL4GP", "b1d9002033c7e550e55a51a23dca4f31");
    //Custom Components By Trader4 Team ;)
    app.component("Response", Response);
    app.component("SelectLibraries", SelectLibraries);
    app.component("CodeBox", CodeBox);

    //Directive for tooltop package
    app.directive("tooltip", {
      mounted(el, binding) {
        init(el, binding);
      },
      updated(el, binding) {
        init(el, binding);
      },
    });
  },
  setup() {
    const router = useRouter();
    if (router.route.path === "/") {
      router.go("/en/");
    }
    const { lang } = useData();
    watchEffect(() => {
      if (typeof document !== "undefined")
        document.cookie = `nf_lang=${lang.value}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/`;
    });
  },
};
function init(el: any, binding: any) {
  let position = binding.arg || "top";
  let tooltipText = binding.value || "Tooltip text";
  el.setAttribute("position", position);
  el.setAttribute("tooltip", tooltipText);
}
