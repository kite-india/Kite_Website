/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react'
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal'
import { Enquiry } from '../models'
export declare type ValidationResponse = {
  hasError: boolean
  errorMessage?: string
}
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>
export declare type EnquiryUpdateFormInputValues = {
  destination_name?: string
  name?: string
  email?: string
  number_of_people?: number
  vacation_type?: string
  phone_number?: string
}
export declare type EnquiryUpdateFormValidationValues = {
  destination_name?: ValidationFunction<string>
  name?: ValidationFunction<string>
  email?: ValidationFunction<string>
  number_of_people?: ValidationFunction<number>
  vacation_type?: ValidationFunction<string>
  phone_number?: ValidationFunction<string>
}
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type EnquiryUpdateFormOverridesProps = {
  EnquiryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>
  destination_name?: PrimitiveOverrideProps<TextFieldProps>
  name?: PrimitiveOverrideProps<TextFieldProps>
  email?: PrimitiveOverrideProps<TextFieldProps>
  number_of_people?: PrimitiveOverrideProps<TextFieldProps>
  vacation_type?: PrimitiveOverrideProps<TextFieldProps>
  phone_number?: PrimitiveOverrideProps<TextFieldProps>
} & EscapeHatchProps
export declare type EnquiryUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: EnquiryUpdateFormOverridesProps | undefined | null
  } & {
    id?: string
    enquiry?: Enquiry
    onSubmit?: (
      fields: EnquiryUpdateFormInputValues
    ) => EnquiryUpdateFormInputValues
    onSuccess?: (fields: EnquiryUpdateFormInputValues) => void
    onError?: (
      fields: EnquiryUpdateFormInputValues,
      errorMessage: string
    ) => void
    onChange?: (
      fields: EnquiryUpdateFormInputValues
    ) => EnquiryUpdateFormInputValues
    onValidate?: EnquiryUpdateFormValidationValues
  } & React.CSSProperties
>
export default function EnquiryUpdateForm(
  props: EnquiryUpdateFormProps
): React.ReactElement
