import "./CardAtom.scss";

type CardProps = {
	children: JSX.Element | JSX.Element[];
	ariaLabel?: string;
};

export const CardAtom = ({ children, ariaLabel }: CardProps) => {
	return (
		<article aria-labelledby={ariaLabel} className="card">
			{children}
		</article>
	);
};
