/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Gallery } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GalleryUpdateFormInputValues = {
    image?: string;
    packageID?: string;
};
export declare type GalleryUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    packageID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GalleryUpdateFormOverridesProps = {
    GalleryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    packageID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GalleryUpdateFormProps = React.PropsWithChildren<{
    overrides?: GalleryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gallery?: Gallery;
    onSubmit?: (fields: GalleryUpdateFormInputValues) => GalleryUpdateFormInputValues;
    onSuccess?: (fields: GalleryUpdateFormInputValues) => void;
    onError?: (fields: GalleryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GalleryUpdateFormInputValues) => GalleryUpdateFormInputValues;
    onValidate?: GalleryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GalleryUpdateForm(props: GalleryUpdateFormProps): React.ReactElement;
