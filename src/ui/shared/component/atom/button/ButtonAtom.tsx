import "./ButtonAtom.scss";

type ButtonAtomProps = {
	label?: string | number;
	role?: string;
	onClick: () => void;
	children?: JSX.Element | string;
	ariaExpanded?: boolean;
	ariaHaspopup?: boolean;
	ariaControls?: string;
	ariaLabel?: string;
	size?: "sm" | "md" | "lg";
	variant?: "primary" | "acent" | "secondary";
	isDisabled?: boolean;
};

export const ButtonAtom = ({
	label,
	role = "button",
	onClick,
	children,
	ariaExpanded,
	size = "md",
	variant = "primary",
	ariaHaspopup = false,
	ariaControls,
	ariaLabel,
	isDisabled = false,
}: ButtonAtomProps) => {
	const buttonClassName = `button button--${size} button--${variant}`;

	return (
		<button
			className={buttonClassName}
			role={role}
			onClick={onClick}
			aria-haspopup={ariaHaspopup}
			aria-expanded={ariaExpanded}
			aria-controls={ariaControls}
			aria-label={ariaLabel}
			disabled={isDisabled}
		>
			{label ? label : children}
		</button>
	);
};
