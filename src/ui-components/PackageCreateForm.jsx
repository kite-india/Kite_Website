/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Package } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PackageCreateForm(props) {
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
    name: "",
    contact: "",
    description: "",
    location: "",
    cost: "",
    image: "",
    details_file: "",
    is_premium_flag: false,
    video_link: "",
    duration: "",
    actual_cost: "",
    have_flight: false,
    have_hotels: false,
    have_sightseeing: false,
    have_meals: false,
    have_transfers: false,
    cities: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [contact, setContact] = React.useState(initialValues.contact);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [location, setLocation] = React.useState(initialValues.location);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [image, setImage] = React.useState(initialValues.image);
  const [details_file, setDetails_file] = React.useState(
    initialValues.details_file
  );
  const [is_premium_flag, setIs_premium_flag] = React.useState(
    initialValues.is_premium_flag
  );
  const [video_link, setVideo_link] = React.useState(initialValues.video_link);
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [actual_cost, setActual_cost] = React.useState(
    initialValues.actual_cost
  );
  const [have_flight, setHave_flight] = React.useState(
    initialValues.have_flight
  );
  const [have_hotels, setHave_hotels] = React.useState(
    initialValues.have_hotels
  );
  const [have_sightseeing, setHave_sightseeing] = React.useState(
    initialValues.have_sightseeing
  );
  const [have_meals, setHave_meals] = React.useState(initialValues.have_meals);
  const [have_transfers, setHave_transfers] = React.useState(
    initialValues.have_transfers
  );
  const [cities, setCities] = React.useState(initialValues.cities);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setContact(initialValues.contact);
    setDescription(initialValues.description);
    setLocation(initialValues.location);
    setCost(initialValues.cost);
    setImage(initialValues.image);
    setDetails_file(initialValues.details_file);
    setIs_premium_flag(initialValues.is_premium_flag);
    setVideo_link(initialValues.video_link);
    setDuration(initialValues.duration);
    setActual_cost(initialValues.actual_cost);
    setHave_flight(initialValues.have_flight);
    setHave_hotels(initialValues.have_hotels);
    setHave_sightseeing(initialValues.have_sightseeing);
    setHave_meals(initialValues.have_meals);
    setHave_transfers(initialValues.have_transfers);
    setCities(initialValues.cities);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    contact: [{ type: "Required" }],
    description: [{ type: "Required" }],
    location: [{ type: "Required" }],
    cost: [{ type: "Required" }],
    image: [{ type: "Required" }],
    details_file: [{ type: "Required" }],
    is_premium_flag: [{ type: "Required" }],
    video_link: [{ type: "Required" }],
    duration: [{ type: "Required" }],
    actual_cost: [{ type: "Required" }],
    have_flight: [{ type: "Required" }],
    have_hotels: [{ type: "Required" }],
    have_sightseeing: [{ type: "Required" }],
    have_meals: [{ type: "Required" }],
    have_transfers: [{ type: "Required" }],
    cities: [{ type: "Required" }],
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
          name,
          contact,
          description,
          location,
          cost,
          image,
          details_file,
          is_premium_flag,
          video_link,
          duration,
          actual_cost,
          have_flight,
          have_hotels,
          have_sightseeing,
          have_meals,
          have_transfers,
          cities,
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
          await DataStore.save(new Package(modelFields));
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
      {...getOverrideProps(overrides, "PackageCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
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
        label="Contact"
        isRequired={true}
        isReadOnly={false}
        value={contact}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.contact ?? value;
          }
          if (errors.contact?.hasError) {
            runValidationTasks("contact", value);
          }
          setContact(value);
        }}
        onBlur={() => runValidationTasks("contact", contact)}
        errorMessage={errors.contact?.errorMessage}
        hasError={errors.contact?.hasError}
        {...getOverrideProps(overrides, "contact")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={true}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.cost ?? value;
          }
          if (errors.cost?.hasError) {
            runValidationTasks("cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("cost", cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, "cost")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Details file"
        isRequired={true}
        isReadOnly={false}
        value={details_file}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.details_file ?? value;
          }
          if (errors.details_file?.hasError) {
            runValidationTasks("details_file", value);
          }
          setDetails_file(value);
        }}
        onBlur={() => runValidationTasks("details_file", details_file)}
        errorMessage={errors.details_file?.errorMessage}
        hasError={errors.details_file?.hasError}
        {...getOverrideProps(overrides, "details_file")}
      ></TextField>
      <SwitchField
        label="Is premium flag"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_premium_flag}
        onChange={(e) => {
          let value = e.target.checked;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.is_premium_flag ?? value;
          }
          if (errors.is_premium_flag?.hasError) {
            runValidationTasks("is_premium_flag", value);
          }
          setIs_premium_flag(value);
        }}
        onBlur={() => runValidationTasks("is_premium_flag", is_premium_flag)}
        errorMessage={errors.is_premium_flag?.errorMessage}
        hasError={errors.is_premium_flag?.hasError}
        {...getOverrideProps(overrides, "is_premium_flag")}
      ></SwitchField>
      <TextField
        label="Video link"
        isRequired={true}
        isReadOnly={false}
        value={video_link}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link: value,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.video_link ?? value;
          }
          if (errors.video_link?.hasError) {
            runValidationTasks("video_link", value);
          }
          setVideo_link(value);
        }}
        onBlur={() => runValidationTasks("video_link", video_link)}
        errorMessage={errors.video_link?.errorMessage}
        hasError={errors.video_link?.hasError}
        {...getOverrideProps(overrides, "video_link")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={true}
        isReadOnly={false}
        value={duration}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link,
              duration: value,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="Actual cost"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={actual_cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
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
              video_link,
              duration,
              actual_cost: value,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.actual_cost ?? value;
          }
          if (errors.actual_cost?.hasError) {
            runValidationTasks("actual_cost", value);
          }
          setActual_cost(value);
        }}
        onBlur={() => runValidationTasks("actual_cost", actual_cost)}
        errorMessage={errors.actual_cost?.errorMessage}
        hasError={errors.actual_cost?.hasError}
        {...getOverrideProps(overrides, "actual_cost")}
      ></TextField>
      <SwitchField
        label="Have flight"
        defaultChecked={false}
        isDisabled={false}
        isChecked={have_flight}
        onChange={(e) => {
          let value = e.target.checked;
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
              video_link,
              duration,
              actual_cost,
              have_flight: value,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.have_flight ?? value;
          }
          if (errors.have_flight?.hasError) {
            runValidationTasks("have_flight", value);
          }
          setHave_flight(value);
        }}
        onBlur={() => runValidationTasks("have_flight", have_flight)}
        errorMessage={errors.have_flight?.errorMessage}
        hasError={errors.have_flight?.hasError}
        {...getOverrideProps(overrides, "have_flight")}
      ></SwitchField>
      <SwitchField
        label="Have hotels"
        defaultChecked={false}
        isDisabled={false}
        isChecked={have_hotels}
        onChange={(e) => {
          let value = e.target.checked;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels: value,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.have_hotels ?? value;
          }
          if (errors.have_hotels?.hasError) {
            runValidationTasks("have_hotels", value);
          }
          setHave_hotels(value);
        }}
        onBlur={() => runValidationTasks("have_hotels", have_hotels)}
        errorMessage={errors.have_hotels?.errorMessage}
        hasError={errors.have_hotels?.hasError}
        {...getOverrideProps(overrides, "have_hotels")}
      ></SwitchField>
      <SwitchField
        label="Have sightseeing"
        defaultChecked={false}
        isDisabled={false}
        isChecked={have_sightseeing}
        onChange={(e) => {
          let value = e.target.checked;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing: value,
              have_meals,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.have_sightseeing ?? value;
          }
          if (errors.have_sightseeing?.hasError) {
            runValidationTasks("have_sightseeing", value);
          }
          setHave_sightseeing(value);
        }}
        onBlur={() => runValidationTasks("have_sightseeing", have_sightseeing)}
        errorMessage={errors.have_sightseeing?.errorMessage}
        hasError={errors.have_sightseeing?.hasError}
        {...getOverrideProps(overrides, "have_sightseeing")}
      ></SwitchField>
      <SwitchField
        label="Have meals"
        defaultChecked={false}
        isDisabled={false}
        isChecked={have_meals}
        onChange={(e) => {
          let value = e.target.checked;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals: value,
              have_transfers,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.have_meals ?? value;
          }
          if (errors.have_meals?.hasError) {
            runValidationTasks("have_meals", value);
          }
          setHave_meals(value);
        }}
        onBlur={() => runValidationTasks("have_meals", have_meals)}
        errorMessage={errors.have_meals?.errorMessage}
        hasError={errors.have_meals?.hasError}
        {...getOverrideProps(overrides, "have_meals")}
      ></SwitchField>
      <SwitchField
        label="Have transfers"
        defaultChecked={false}
        isDisabled={false}
        isChecked={have_transfers}
        onChange={(e) => {
          let value = e.target.checked;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers: value,
              cities,
            };
            const result = onChange(modelFields);
            value = result?.have_transfers ?? value;
          }
          if (errors.have_transfers?.hasError) {
            runValidationTasks("have_transfers", value);
          }
          setHave_transfers(value);
        }}
        onBlur={() => runValidationTasks("have_transfers", have_transfers)}
        errorMessage={errors.have_transfers?.errorMessage}
        hasError={errors.have_transfers?.hasError}
        {...getOverrideProps(overrides, "have_transfers")}
      ></SwitchField>
      <TextField
        label="Cities"
        isRequired={true}
        isReadOnly={false}
        value={cities}
        onChange={(e) => {
          let { value } = e.target;
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
              video_link,
              duration,
              actual_cost,
              have_flight,
              have_hotels,
              have_sightseeing,
              have_meals,
              have_transfers,
              cities: value,
            };
            const result = onChange(modelFields);
            value = result?.cities ?? value;
          }
          if (errors.cities?.hasError) {
            runValidationTasks("cities", value);
          }
          setCities(value);
        }}
        onBlur={() => runValidationTasks("cities", cities)}
        errorMessage={errors.cities?.errorMessage}
        hasError={errors.cities?.hasError}
        {...getOverrideProps(overrides, "cities")}
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
