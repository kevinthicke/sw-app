type ButtonAtomProps = {
	label?: string | number;
	role?: string;
	onClick: () => void;
	children?: JSX.Element;
};

export const ButtonAtom = ({ label, role = "button", onClick, children }: ButtonAtomProps) => {
	return (
		<button role={role} onClick={onClick}>
			{label ? label : children}
		</button>
	);
};
