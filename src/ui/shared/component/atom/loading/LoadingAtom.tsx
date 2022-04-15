import { memo } from "react";
import "./LoadingAtom.scss";

type LoadingAtomProps = {
	isDisplayed: boolean;
};

export const LoadingAtom = memo(({ isDisplayed }: LoadingAtomProps) => {
	return isDisplayed ? <div className="loading" /> : <div />;
});
