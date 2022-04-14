import React from "react";
import { handleErrorUseCase } from "../../../../../core/shared/application/useCase/handleErrorUseCase";

type ErrorBoundaryProps = { children: JSX.Element };
type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: { children: JSX.Element }) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}
	componentDidCatch(error: Error, errorInfo: any) {
		console.log({ error, errorInfo });
		handleErrorUseCase(error);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong!</h1>;
		}

		return this.props.children;
	}
}
