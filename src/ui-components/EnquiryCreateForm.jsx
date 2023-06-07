/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Enquiry } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EnquiryCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    destination_name: "",
    name: "",
    email: "",
    number_of_people: "",
    vacation_type: "",
    phone_number: "",
  };
  const [destination_name, setDestination_name] = React.useState(
    initialValues.destination_name
  );
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [number_of_people, setNumber_of_people] = React.useState(
    initialValues.number_of_people
  );
  const [vacation_type, setVacation_type] = React.useState(
    initialValues.vacation_type
  );
  const [phone_number, setPhone_number] = React.useState(
    initialValues.phone_number
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDestination_name(initialValues.destination_name);
    setName(initialValues.name);
    setEmail(initialValues.email);
    setNumber_of_people(initialValues.number_of_people);
    setVacation_type(initialValues.vacation_type);
    setPhone_number(initialValues.phone_number);
    setErrors({});
  };
  const validations = {
    destination_name: [],
    name: [],
    email: [],
    number_of_people: [],
    vacation_type: [],
    phone_number: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          destination_name,
          name,
          email,
          number_of_people,
          vacation_type,
          phone_number,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Enquiry(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EnquiryCreateForm")}
      {...rest}
    >
      <TextField
        label="Destination name"
        isRequired={false}
        isReadOnly={false}
        value={destination_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              destination_name: value,
              name,
              email,
              number_of_people,
              vacation_type,
              phone_number,
            };
            const result = onChange(modelFields);
            value = result?.destination_name ?? value;
          }
          if (errors.destination_name?.hasError) {
            runValidationTasks("destination_name", value);
          }
          setDestination_name(value);
        }}
        onBlur={() => runValidationTasks("destination_name", destination_name)}
        errorMessage={errors.destination_name?.errorMessage}
        hasError={errors.destination_name?.hasError}
        {...getOverrideProps(overrides, "destination_name")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              destination_name,
              name: value,
              email,
              number_of_people,
              vacation_type,
              phone_number,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              destination_name,
              name,
              email: value,
              number_of_people,
              vacation_type,
              phone_number,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Number of people"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={number_of_people}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              destination_name,
              name,
              email,
              number_of_people: value,
              vacation_type,
              phone_number,
            };
            const result = onChange(modelFields);
            value = result?.number_of_people ?? value;
          }
          if (errors.number_of_people?.hasError) {
            runValidationTasks("number_of_people", value);
          }
          setNumber_of_people(value);
        }}
        onBlur={() => runValidationTasks("number_of_people", number_of_people)}
        errorMessage={errors.number_of_people?.errorMessage}
        hasError={errors.number_of_people?.hasError}
        {...getOverrideProps(overrides, "number_of_people")}
      ></TextField>
      <TextField
        label="Vacation type"
        isRequired={false}
        isReadOnly={false}
        value={vacation_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              destination_name,
              name,
              email,
              number_of_people,
              vacation_type: value,
              phone_number,
            };
            const result = onChange(modelFields);
            value = result?.vacation_type ?? value;
          }
          if (errors.vacation_type?.hasError) {
            runValidationTasks("vacation_type", value);
          }
          setVacation_type(value);
        }}
        onBlur={() => runValidationTasks("vacation_type", vacation_type)}
        errorMessage={errors.vacation_type?.errorMessage}
        hasError={errors.vacation_type?.hasError}
        {...getOverrideProps(overrides, "vacation_type")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        value={phone_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              destination_name,
              name,
              email,
              number_of_people,
              vacation_type,
              phone_number: value,
            };
            const result = onChange(modelFields);
            value = result?.phone_number ?? value;
          }
          if (errors.phone_number?.hasError) {
            runValidationTasks("phone_number", value);
          }
          setPhone_number(value);
        }}
        onBlur={() => runValidationTasks("phone_number", phone_number)}
        errorMessage={errors.phone_number?.errorMessage}
        hasError={errors.phone_number?.hasError}
        {...getOverrideProps(overrides, "phone_number")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
