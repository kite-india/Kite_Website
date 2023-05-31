/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Package } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PackageUpdateFormInputValues = {
    name?: string;
    contact?: string;
    description?: string;
    location?: string;
    cost?: number;
    image?: string;
    details_file?: string;
    is_premium_flag?: boolean;
    video_link?: string;
};
export declare type PackageUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    contact?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
    details_file?: ValidationFunction<string>;
    is_premium_flag?: ValidationFunction<boolean>;
    video_link?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PackageUpdateFormOverridesProps = {
    PackageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    contact?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    details_file?: PrimitiveOverrideProps<TextFieldProps>;
    is_premium_flag?: PrimitiveOverrideProps<SwitchFieldProps>;
    video_link?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PackageUpdateFormProps = React.PropsWithChildren<{
    overrides?: PackageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    package?: Package;
    onSubmit?: (fields: PackageUpdateFormInputValues) => PackageUpdateFormInputValues;
    onSuccess?: (fields: PackageUpdateFormInputValues) => void;
    onError?: (fields: PackageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PackageUpdateFormInputValues) => PackageUpdateFormInputValues;
    onValidate?: PackageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PackageUpdateForm(props: PackageUpdateFormProps): React.ReactElement;
