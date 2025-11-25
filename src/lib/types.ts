import type { Toast } from "primereact/toast";
import type { RefObject } from "react";

export type ContextType = {
  toastRef: RefObject<Toast>;
};
export type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  price: string;
  icon: string;
  bgImg: string;
  slug: string;
}