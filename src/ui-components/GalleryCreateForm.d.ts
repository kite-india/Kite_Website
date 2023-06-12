/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GalleryCreateFormInputValues = {
    image?: string;
    packageID?: string;
};
export declare type GalleryCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    packageID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GalleryCreateFormOverridesProps = {
    GalleryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    packageID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GalleryCreateFormProps = React.PropsWithChildren<{
    overrides?: GalleryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GalleryCreateFormInputValues) => GalleryCreateFormInputValues;
    onSuccess?: (fields: GalleryCreateFormInputValues) => void;
    onError?: (fields: GalleryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GalleryCreateFormInputValues) => GalleryCreateFormInputValues;
    onValidate?: GalleryCreateFormValidationValues;
} & React.CSSProperties>;
export default function GalleryCreateForm(props: GalleryCreateFormProps): React.ReactElement;
