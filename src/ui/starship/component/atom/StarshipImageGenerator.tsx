/**
 * NOTE: Starship and its image are not related via API. Because I am out of time, I decided to
 * create this component in order to generate a random image for each starship :(
 * */

import { createArrayOfNulls } from "../../../../core/shared/domain/utils/createArrayOfNulls";
import { Starship } from "../../../../core/starship/domain/entity/Starship";
import { ImageAtom } from "../../../shared/component/atom/image/ImageAtom";

type StarshipImageGeneratorProps = {
	starship: Starship;
};

export const StarshipImageGenerator = ({ starship }: StarshipImageGeneratorProps) => {
	const NUMBER_OF_IMAGES_AT_STATIC_FOLDER = 9;
	const imageNameList = createArrayOfNulls(NUMBER_OF_IMAGES_AT_STATIC_FOLDER).map((_, index) => index + 1);
	const randomImageName = imageNameList[Math.floor(Math.random() * imageNameList.length)];

	return (
		<ImageAtom
			src={`/static/images/${randomImageName}.png`}
			webpSrc={`/static/images/${randomImageName}.webp`}
			alt={`${starship.name} image`}
		/>
	);
};
