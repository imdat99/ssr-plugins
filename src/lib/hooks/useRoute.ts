import { useMatches } from "react-router";
import { useMemo } from "react";
export const useRoute = () => {
	const matches = useMatches();
	const matchRoute = useMemo(() => {
		return matches[matches.length - 1];
	}, [matches]);
	return matchRoute;
};