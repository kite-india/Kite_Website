/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UserInfo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserInfoUpdateForm(props) {
  const {
    id: idProp,
    userInfo: userInfoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    dob: "",
    phone_number: "",
    primary_phone: "",
    secondary_phone: "",
    email: "",
  };
  const [dob, setDob] = React.useState(initialValues.dob);
  const [phone_number, setPhone_number] = React.useState(
    initialValues.phone_number
  );
  const [primary_phone, setPrimary_phone] = React.useState(
    initialValues.primary_phone
  );
  const [secondary_phone, setSecondary_phone] = React.useState(
    initialValues.secondary_phone
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userInfoRecord
      ? { ...initialValues, ...userInfoRecord }
      : initialValues;
    setDob(cleanValues.dob);
    setPhone_number(cleanValues.phone_number);
    setPrimary_phone(cleanValues.primary_phone);
    setSecondary_phone(cleanValues.secondary_phone);
    setEmail(cleanValues.email);
    setErrors({});
  };
  const [userInfoRecord, setUserInfoRecord] = React.useState(userInfoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserInfo, idProp)
        : userInfoModelProp;
      setUserInfoRecord(record);
    };
    queryData();
  }, [idProp, userInfoModelProp]);
  React.useEffect(resetStateValues, [userInfoRecord]);
  const validations = {
    dob: [],
    phone_number: [],
    primary_phone: [],
    secondary_phone: [],
    email: [],
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
          dob,
          phone_number,
          primary_phone,
          secondary_phone,
          email,
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
          await DataStore.save(
            UserInfo.copyOf(userInfoRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserInfoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        value={dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dob: value,
              phone_number,
              primary_phone,
              secondary_phone,
              email,
            };
            const result = onChange(modelFields);
            value = result?.dob ?? value;
          }
          if (errors.dob?.hasError) {
            runValidationTasks("dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("dob", dob)}
        errorMessage={errors.dob?.errorMessage}
        hasError={errors.dob?.hasError}
        {...getOverrideProps(overrides, "dob")}
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
              dob,
              phone_number: value,
              primary_phone,
              secondary_phone,
              email,
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
      <TextField
        label="Primary phone"
        isRequired={false}
        isReadOnly={false}
        value={primary_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dob,
              phone_number,
              primary_phone: value,
              secondary_phone,
              email,
            };
            const result = onChange(modelFields);
            value = result?.primary_phone ?? value;
          }
          if (errors.primary_phone?.hasError) {
            runValidationTasks("primary_phone", value);
          }
          setPrimary_phone(value);
        }}
        onBlur={() => runValidationTasks("primary_phone", primary_phone)}
        errorMessage={errors.primary_phone?.errorMessage}
        hasError={errors.primary_phone?.hasError}
        {...getOverrideProps(overrides, "primary_phone")}
      ></TextField>
      <TextField
        label="Secondary phone"
        isRequired={false}
        isReadOnly={false}
        value={secondary_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dob,
              phone_number,
              primary_phone,
              secondary_phone: value,
              email,
            };
            const result = onChange(modelFields);
            value = result?.secondary_phone ?? value;
          }
          if (errors.secondary_phone?.hasError) {
            runValidationTasks("secondary_phone", value);
          }
          setSecondary_phone(value);
        }}
        onBlur={() => runValidationTasks("secondary_phone", secondary_phone)}
        errorMessage={errors.secondary_phone?.errorMessage}
        hasError={errors.secondary_phone?.hasError}
        {...getOverrideProps(overrides, "secondary_phone")}
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
              dob,
              phone_number,
              primary_phone,
              secondary_phone,
              email: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userInfoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userInfoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
