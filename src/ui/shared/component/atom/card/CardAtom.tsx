import "./CardAtom.scss";

type CardProps = {
	children: JSX.Element | JSX.Element[];
};

export const CardAtom = ({ children }: CardProps) => {
	return <section className="card">{children}</section>;
};
