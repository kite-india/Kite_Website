/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react'
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField
} from '@aws-amplify/ui-react'
import { getOverrideProps } from '@aws-amplify/ui-react/internal'
import { Package } from '../models'
import { fetchByPath, validateField } from './utils'
import { DataStore } from 'aws-amplify'
export default function PackageUpdateForm(props) {
  const {
    id: idProp,
    package: packageModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props
  const initialValues = {
    name: '',
    contact: '',
    description: '',
    location: '',
    cost: '',
    image: '',
    details_file: '',
    is_premium_flag: false,
    video_link: ''
  }
  const [name, setName] = React.useState(initialValues.name)
  const [contact, setContact] = React.useState(initialValues.contact)
  const [description, setDescription] = React.useState(
    initialValues.description
  )
  const [location, setLocation] = React.useState(initialValues.location)
  const [cost, setCost] = React.useState(initialValues.cost)
  const [image, setImage] = React.useState(initialValues.image)
  const [details_file, setDetails_file] = React.useState(
    initialValues.details_file
  )
  const [is_premium_flag, setIs_premium_flag] = React.useState(
    initialValues.is_premium_flag
  )
  const [video_link, setVideo_link] = React.useState(initialValues.video_link)
  const [errors, setErrors] = React.useState({})
  const resetStateValues = () => {
    const cleanValues = packageRecord
      ? { ...initialValues, ...packageRecord }
      : initialValues
    setName(cleanValues.name)
    setContact(cleanValues.contact)
    setDescription(cleanValues.description)
    setLocation(cleanValues.location)
    setCost(cleanValues.cost)
    setImage(cleanValues.image)
    setDetails_file(cleanValues.details_file)
    setIs_premium_flag(cleanValues.is_premium_flag)
    setVideo_link(cleanValues.video_link)
    setErrors({})
  }
  const [packageRecord, setPackageRecord] = React.useState(packageModelProp)
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Package, idProp)
        : packageModelProp
      setPackageRecord(record)
    }
    queryData()
  }, [idProp, packageModelProp])
  React.useEffect(resetStateValues, [packageRecord])
  const validations = {
    name: [{ type: 'Required' }],
    contact: [{ type: 'Required' }],
    description: [{ type: 'Required' }],
    location: [{ type: 'Required' }],
    cost: [{ type: 'Required' }],
    image: [{ type: 'Required' }],
    details_file: [{ type: 'Required' }],
    is_premium_flag: [],
    video_link: []
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
          name,
          contact,
          description,
          location,
          cost,
          image,
          details_file,
          is_premium_flag,
          video_link
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
          await DataStore.save(
            Package.copyOf(packageRecord, updated => {
              Object.assign(updated, modelFields)
            })
          )
          if (onSuccess) {
            onSuccess(modelFields)
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message)
          }
        }
      }}
      {...getOverrideProps(overrides, 'PackageUpdateForm')}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={e => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name: value,
              contact,
              description,
              location,
              cost,
              image,
              details_file,
              is_premium_flag,
              video_link
            }
            const result = onChange(modelFields)
            value = result?.name ?? value
          }
          if (errors.name?.hasError) {
            runValidationTasks('name', value)
          }
          setName(value)
        }}
        onBlur={() => runValidationTasks('name', name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, 'name')}
      ></TextField>
      <TextField
        label="Contact"
        isRequired={true}
        isReadOnly={false}
        value={contact}
        onChange={e => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              contact: value,
              description,
              location,
              cost,
              image,
              details_file,
              is_premium_flag,
              video_link
            }
            const result = onChange(modelFields)
            value = result?.contact ?? value
          }
          if (errors.contact?.hasError) {
            runValidationTasks('contact', value)
          }
          setContact(value)
        }}
        onBlur={() => runValidationTasks('contact', contact)}
        errorMessage={errors.contact?.errorMessage}
        hasError={errors.contact?.hasError}
        {...getOverrideProps(overrides, 'contact')}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={e => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              contact,
              description: value,
              location,
              cost,
              image,
              details_file,
              is_premium_flag,
              video_link
            }
            const result = onChange(modelFields)
            value = result?.description ?? value
          }
          if (errors.description?.hasError) {
            runValidationTasks('description', value)
          }
          setDescription(value)
        }}
        onBlur={() => runValidationTasks('description', description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, 'description')}
      ></TextField>
      <TextField
        label="Location"
        isRequired={true}
        isReadOnly={false}
        value={location}
        onChange={e => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              contact,
              description,
              location: value,
              cost,
              image,
              details_file,
              is_premium_flag,
              video_link
            }
            const result = onChange(modelFields)
            value = result?.location ?? value
          }
          if (errors.location?.hasError) {
            runValidationTasks('location', value)
          }
          setLocation(value)
        }}
        onBlur={() => runValidationTasks('location', location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, 'location')}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cost}
        onChange={e => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value)
          if (onChange) {
            const modelFields = {
              name,
              contact,
              description,
              location,
              cost: value,
              image,
              details_file,
              is_premium_flag,
              video_link
            }
            const result = onChange(modelFields)
            value = result?.cost ?? value
          }
          if (errors.cost?.hasError) {
            runValidationTasks('cost', value)
          }
          setCost(value)
        }}
        onBlur={() => runValidationTasks('cost', cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, 'cost')}
      ></TextField>
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={image}
        onChange={e => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              contact,
              description,
              location,
              cost,
              image: value,
              details_file,
              is_premium_flag,
              video_link
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
      <TextField
        label="Details file"
        isRequired={true}
        isReadOnly={false}
        value={details_file}
        onChange={e => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              contact,
              description,
              location,
              cost,
              image,
              details_file: value,
              is_premium_flag,
              video_link
            }
            const result = onChange(modelFields)
            value = result?.details_file ?? value
          }
          if (errors.details_file?.hasError) {
            runValidationTasks('details_file', value)
          }
          setDetails_file(value)
        }}
        onBlur={() => runValidationTasks('details_file', details_file)}
        errorMessage={errors.details_file?.errorMessage}
        hasError={errors.details_file?.hasError}
        {...getOverrideProps(overrides, 'details_file')}
      ></TextField>
      <SwitchField
        label="Is premium flag"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_premium_flag}
        onChange={e => {
          let value = e.target.checked
          if (onChange) {
            const modelFields = {
              name,
              contact,
              description,
              location,
              cost,
              image,
              details_file,
              is_premium_flag: value,
              video_link
            }
            const result = onChange(modelFields)
            value = result?.is_premium_flag ?? value
          }
          if (errors.is_premium_flag?.hasError) {
            runValidationTasks('is_premium_flag', value)
          }
          setIs_premium_flag(value)
        }}
        onBlur={() => runValidationTasks('is_premium_flag', is_premium_flag)}
        errorMessage={errors.is_premium_flag?.errorMessage}
        hasError={errors.is_premium_flag?.hasError}
        {...getOverrideProps(overrides, 'is_premium_flag')}
      ></SwitchField>
      <TextField
        label="Video link"
        isRequired={false}
        isReadOnly={false}
        value={video_link}
        onChange={e => {
          let { value } = e.target
          if (onChange) {
            const modelFields = {
              name,
              contact,
              description,
              location,
              cost,
              image,
              details_file,
              is_premium_flag,
              video_link: value
            }
            const result = onChange(modelFields)
            value = result?.video_link ?? value
          }
          if (errors.video_link?.hasError) {
            runValidationTasks('video_link', value)
          }
          setVideo_link(value)
        }}
        onBlur={() => runValidationTasks('video_link', video_link)}
        errorMessage={errors.video_link?.errorMessage}
        hasError={errors.video_link?.hasError}
        {...getOverrideProps(overrides, 'video_link')}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, 'CTAFlex')}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={event => {
            event.preventDefault()
            resetStateValues()
          }}
          isDisabled={!(idProp || packageModelProp)}
          {...getOverrideProps(overrides, 'ResetButton')}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || packageModelProp) ||
              Object.values(errors).some(e => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
