/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react'
import { Button, Flex, Grid, TextField } from '@aws-amplify/ui-react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { Gallery } from '../models'
import { fetchByPath, validateField } from './utils'
import { DataStore } from 'aws-amplify'
export default function GalleryCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props
  const initialValues = {
    image: ''
  }
  const [image, setImage] = React.useState(initialValues.image)
  const [errors, setErrors] = React.useState({})
  const resetStateValues = () => {
    setImage(initialValues.image)
    setErrors({})
  }
  const validations = {
    image: [{ type: 'Required' }]
  }
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue
    let validationResponse = validateField(value, validations[fieldName])
    const customValidator = fetchByPath(onValidate, fieldName)
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse)
    }
    setErrors(errors => ({ ...errors, [fieldName]: validationResponse }))
    return validationResponse
  }
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async event => {
        event.preventDefault()
        let modelFields = {
          image
        }
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map(item =>
                  runValidationTasks(fieldName, item)
                )
              )
              return promises
            }
            promises.push(runValidationTasks(fieldName, modelFields[fieldName]))
            return promises
          }, [])
        )
        if (validationResponses.some(r => r.hasError)) {
          return
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields)
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === 'string' && value.trim() === '') {
              modelFields[key] = undefined
            }
          })
          await DataStore.save(new Gallery(modelFields))
          if (onSuccess) {
            onSuccess(modelFields)
          }
          if (clearOnSuccess) {
            resetStateValues()
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message)
          }
        }
      }}
      {...getOverrideProps(overrides, 'GalleryCreateForm')}
      {...rest}
    >
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={image}
        onChange={e => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              image: value
            }
            const result = onChange(modelFields)
            value = result?.image ?? value
          }
          if (errors.image?.hasError) {
            runValidationTasks('image', value)
          }
          setImage(value)
        }}
        onBlur={() => runValidationTasks('image', image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, 'image')}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, 'CTAFlex')}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={event => {
            event.preventDefault()
            resetStateValues()
          }}
          {...getOverrideProps(overrides, 'ClearButton')}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some(e => e?.hasError)}
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
