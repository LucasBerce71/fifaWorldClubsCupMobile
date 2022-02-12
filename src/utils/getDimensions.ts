import { Dimensions } from "react-native";

type TDimensionType = 'window' | 'screen';

export const getHeight = (dimensionType: TDimensionType): number => {
    const height = Dimensions.get(dimensionType).height;

    return height;
};

export const getWidth = (dimensionType: TDimensionType): number => {
    const width = Dimensions.get(dimensionType).width;

    return width;
};