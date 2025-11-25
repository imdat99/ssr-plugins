// DataCollector.tsx
import { createContext, createElement, useContext } from "react";
import useSWR, { SWRHook } from "swr";

class DataCollector {
  data: Record<string, any> = {};

  add(key: string, value: any) {
    this.data[key] = value;
  }

  get() {
    return this.data;
  }
}
const collector = new DataCollector();
export const DataCollectorContext = createContext<DataCollector | null>(null);

function useDataCollector() {
  return useContext(DataCollectorContext);
}
export function DataCollectorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    createElement(DataCollectorContext.Provider, { value: collector }, children)
  );
}
export function appFetcher(key: string) {
  const collector = useDataCollector();
  if (!collector) {
    throw new Error("DataCollectorContext is not available");
  }
  return async () => {
    // Simulate data fetching
    const data = await Promise.resolve(`Data for ${key}`);
    collector.add(key, data);
    return data;
  };
}

