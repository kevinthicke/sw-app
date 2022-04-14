import React from "react";
import { dasherize } from "../../../../../core/shared/domain/utils/dasherize";

type InputAtomProps = {
	value: string;
	label?: string;
	type?: string;
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => any;
	onClick?: () => any;
};

export const InputAtom = ({ value, label, onChange, type = "text", onClick = () => {} }: InputAtomProps) => {
	return (
		<div>
			{label && <label htmlFor={dasherize(label)}>{label}</label>}
			<input
				id={label ? dasherize(label) : undefined}
				type={type}
				value={value}
				onChange={onChange}
				onClick={onClick}
			></input>
		</div>
	);
};
