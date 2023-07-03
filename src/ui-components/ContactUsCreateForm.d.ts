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
export declare type ContactUsCreateFormInputValues = {
    name?: string;
    email?: string;
    phone_number?: string;
    description?: string;
};
export declare type ContactUsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsCreateFormOverridesProps = {
    ContactUsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactUsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactUsCreateFormInputValues) => ContactUsCreateFormInputValues;
    onSuccess?: (fields: ContactUsCreateFormInputValues) => void;
    onError?: (fields: ContactUsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactUsCreateFormInputValues) => ContactUsCreateFormInputValues;
    onValidate?: ContactUsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsCreateForm(props: ContactUsCreateFormProps): React.ReactElement;
