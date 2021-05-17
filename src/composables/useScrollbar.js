import { ref, readonly, unref } from "vue";

export const useScrollbar = (el, initialIsVisible = true) => {
  const isVisible = ref(initialIsVisible);

  const showScrollbar = () => {
    if (!el && !(el instanceof HTMLElement)) {
      console.warn("el argument is not a valid HTMLElement");
      return;
    }
    const $el = unref(el);
    $el.style.overflow = "auto";
    isVisible.value = true;
  };

  const hideScrollbar = () => {
    if (!el && !(el instanceof HTMLElement)) {
      console.warn("el argument is not a valid HTMLElement");
      return;
    }
    const $el = unref(el);
    $el.style.overflow = "hidden";
    isVisible.value = false;
  };

  if (!initialIsVisible) hideScrollbar();

  return {
    isVisible: readonly(isVisible),
    showScrollbar,
    hideScrollbar
  };
};
