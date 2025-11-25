import { useMemo } from "react";
import { stableHash } from "swr/_internal";

function getCallerComponentName() {
  const err = new Error();
  const stack = err.stack ?? "";

  // Lấy dòng gọi đầu tiên không phải chính hook
  const lines = stack.split("\n");
  // Tìm dòng có dạng "at ComponentName (...)" 
  for (const line of lines) {
    const match = line.trim().match(/^at (\w+)/);
    if (!match) continue;

    const name = match[1];

    // Loại bỏ hook chính
    if (name === useTypeId.name) continue;
    if (name === getCallerComponentName.name) continue;
    // console.log("match: ", match);
    return name;
  }

  return "AnonymousComponent";
}
// getCallerComponentName.displayName = tinyHash("getCallerComponentName");
export function useTypeId() {
  return useMemo(() => {
    const name = getCallerComponentName();

    // Tạo ID ổn định giữa SSR & CSR
    const hash = tinyHash(name + "_typeid");

    return `cmp_${name}_${hash}`;
  }, []);
}
function tinyHash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Chuyển sang số nguyên 32-bit
  }
  return Math.abs(hash).toString(36);
}