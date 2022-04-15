import React, { memo } from "react";
import { dasherize } from "../../../../../core/shared/domain/utils/dasherize";
import "./InputAtom.scss";

type InputAtomProps = {
	value: string;
	label?: string;
	type?: string;
	onChange?: (value: React.ChangeEvent<HTMLInputElement>) => any;
	onClick?: () => any;
};

export const InputAtom = memo(({ value, label, onChange, type = "text", onClick = () => {} }: InputAtomProps) => {
	return (
		<div className="form-control">
			{label && (
				<label htmlFor={dasherize(label)} className="form-control__label">
					{label}
				</label>
			)}
			<input
				id={label ? dasherize(label) : undefined}
				type={type}
				value={value}
				onChange={onChange}
				onClick={onClick}
				role={type}
				className="form-control__input"
				autoComplete="off"
			></input>
		</div>
	);
});
