import "./LoadingAtom.scss";

type LoadingAtomProps = {
	isDisplayed: boolean;
};

export const LoadingAtom = ({ isDisplayed }: LoadingAtomProps) => {
	const className = `loading ${isDisplayed ? "loading--displayed" : ""}`;
	return <div className={className}>Loading</div>;
};
