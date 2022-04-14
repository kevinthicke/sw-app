import { useContext } from "react";
import { LoadingContext } from "../../../context/loading/LoadingContext";
import { LoadingAtom } from "./LoadingAtom";

export const LoadingContainer = () => {
	const { loadingCount } = useContext(LoadingContext);

	return <LoadingAtom isDisplayed={!!loadingCount} />;
};
