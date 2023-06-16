/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react'
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal'
export declare type ValidationResponse = {
  hasError: boolean
  errorMessage?: string
}
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>
export declare type EnquiryCreateFormInputValues = {
  destination_name?: string
  name?: string
  email?: string
  number_of_people?: number
  vacation_type?: string
  phone_number?: string
}
export declare type EnquiryCreateFormValidationValues = {
  destination_name?: ValidationFunction<string>
  name?: ValidationFunction<string>
  email?: ValidationFunction<string>
  number_of_people?: ValidationFunction<number>
  vacation_type?: ValidationFunction<string>
  phone_number?: ValidationFunction<string>
}
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type EnquiryCreateFormOverridesProps = {
  EnquiryCreateFormGrid?: PrimitiveOverrideProps<GridProps>
  destination_name?: PrimitiveOverrideProps<TextFieldProps>
  name?: PrimitiveOverrideProps<TextFieldProps>
  email?: PrimitiveOverrideProps<TextFieldProps>
  number_of_people?: PrimitiveOverrideProps<TextFieldProps>
  vacation_type?: PrimitiveOverrideProps<TextFieldProps>
  phone_number?: PrimitiveOverrideProps<TextFieldProps>
} & EscapeHatchProps
export declare type EnquiryCreateFormProps = React.PropsWithChildren<
  {
    overrides?: EnquiryCreateFormOverridesProps | undefined | null
  } & {
    clearOnSuccess?: boolean
    onSubmit?: (
      fields: EnquiryCreateFormInputValues
    ) => EnquiryCreateFormInputValues
    onSuccess?: (fields: EnquiryCreateFormInputValues) => void
    onError?: (
      fields: EnquiryCreateFormInputValues,
      errorMessage: string
    ) => void
    onChange?: (
      fields: EnquiryCreateFormInputValues
    ) => EnquiryCreateFormInputValues
    onValidate?: EnquiryCreateFormValidationValues
  } & React.CSSProperties
>
export default function EnquiryCreateForm(
  props: EnquiryCreateFormProps
): React.ReactElement
