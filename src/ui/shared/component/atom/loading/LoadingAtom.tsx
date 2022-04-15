import { memo } from "react";
import "./LoadingAtom.scss";

type LoadingAtomProps = {
	isDisplayed: boolean;
};

export const LoadingAtom = memo(({ isDisplayed }: LoadingAtomProps) => {
	const className = `loading ${isDisplayed ? "loading--displayed" : ""}`;
	return <div className={className}>Loading</div>;
});
