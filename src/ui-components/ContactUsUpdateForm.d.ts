/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ContactUs } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactUsUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone_number?: string;
    description?: string;
};
export declare type ContactUsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsUpdateFormOverridesProps = {
    ContactUsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone_number?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactUsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactUs?: ContactUs;
    onSubmit?: (fields: ContactUsUpdateFormInputValues) => ContactUsUpdateFormInputValues;
    onSuccess?: (fields: ContactUsUpdateFormInputValues) => void;
    onError?: (fields: ContactUsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactUsUpdateFormInputValues) => ContactUsUpdateFormInputValues;
    onValidate?: ContactUsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsUpdateForm(props: ContactUsUpdateFormProps): React.ReactElement;
