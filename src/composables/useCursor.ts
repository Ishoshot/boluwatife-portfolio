import { ref, readonly } from "vue";
import { useMouse } from "@vueuse/core";

const { x, y } = useMouse();
const cursorVariant = ref<"default" | "project">("default");
const cursorText = ref("");

export function useCursor() {
  const setCursorVariant = (variant: "default" | "project") => {
    cursorVariant.value = variant;
  };

  return {
    x,
    y,
    cursorVariant: readonly(cursorVariant),
    setCursorVariant,
  };
}
