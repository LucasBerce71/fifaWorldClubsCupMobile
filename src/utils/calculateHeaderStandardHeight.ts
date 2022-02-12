import { getHeight } from "./getDimensions";

type TDimensionsType = 'window' | 'screen';

export const calculateHeaderStandardHeight = (dimensionType: TDimensionsType): number => {
    const standardHeight = getHeight(dimensionType) / 4;

    return standardHeight;
};