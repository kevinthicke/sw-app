import "./ImageAtom.scss";

export type ImageAtomProps = {
	webpSrc?: string;
	src: string;
	alt: string;
};

export const ImageAtom = ({ src: url, alt, webpSrc }: ImageAtomProps) => {
	return (
		<picture>
			{webpSrc && <source srcSet={webpSrc} type="image/webp" />}
			<img src={url} alt={alt} className="image" />
		</picture>
	);
};
