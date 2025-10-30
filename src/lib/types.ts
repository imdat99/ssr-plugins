import type { Toast } from "primereact/toast";
import type { RefObject } from "react";

export type ContextType = {
  toastRef: RefObject<Toast>;
};