import { useState } from "react";
import { LoadingContext } from "./LoadingContext";

export const LoadingProvider = ({ children }: { children: JSX.Element | Array<JSX.Element> }) => {
	const showLoading = () => {
		toggleLoading((prevState) => {
			return {
				...prevState,
				loadingCount: prevState.loadingCount + 1,
			};
		});
	};

	const closeLoading = () => {
		toggleLoading((prevState) => {
			return {
				...prevState,
				loadingCount: prevState.loadingCount > 0 ? prevState.loadingCount - 1 : 0,
			};
		});
	};

	const [loading, toggleLoading] = useState({ loadingCount: 0, showLoading, closeLoading });

	return <LoadingContext.Provider value={loading}>{children}</LoadingContext.Provider>;
};
