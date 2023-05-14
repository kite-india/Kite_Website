/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react'
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react'
import { EscapeHatchProps } from '@aws-amplify/ui-react/internal'
import { UserInfo } from '../models'
export declare type ValidationResponse = {
  hasError: boolean
  errorMessage?: string
}
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>
export declare type UserInfoUpdateFormInputValues = {
  dob?: string
  phone_number?: string
  primary_phone?: string
  secondary_phone?: string
  email?: string
}
export declare type UserInfoUpdateFormValidationValues = {
  dob?: ValidationFunction<string>
  phone_number?: ValidationFunction<string>
  primary_phone?: ValidationFunction<string>
  secondary_phone?: ValidationFunction<string>
  email?: ValidationFunction<string>
}
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>
export declare type UserInfoUpdateFormOverridesProps = {
  UserInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>
  dob?: PrimitiveOverrideProps<TextFieldProps>
  phone_number?: PrimitiveOverrideProps<TextFieldProps>
  primary_phone?: PrimitiveOverrideProps<TextFieldProps>
  secondary_phone?: PrimitiveOverrideProps<TextFieldProps>
  email?: PrimitiveOverrideProps<TextFieldProps>
} & EscapeHatchProps
export declare type UserInfoUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: UserInfoUpdateFormOverridesProps | undefined | null
  } & {
    id?: string
    userInfo?: UserInfo
    onSubmit?: (
      fields: UserInfoUpdateFormInputValues
    ) => UserInfoUpdateFormInputValues
    onSuccess?: (fields: UserInfoUpdateFormInputValues) => void
    onError?: (
      fields: UserInfoUpdateFormInputValues,
      errorMessage: string
    ) => void
    onChange?: (
      fields: UserInfoUpdateFormInputValues
    ) => UserInfoUpdateFormInputValues
    onValidate?: UserInfoUpdateFormValidationValues
  } & React.CSSProperties
>
export default function UserInfoUpdateForm(
  props: UserInfoUpdateFormProps
): React.ReactElement
