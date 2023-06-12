/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActivityInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  link?: string | null,
  packageName?: string | null,
  cost?: number | null,
  packageID: string,
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  link?: ModelStringInput | null,
  packageName?: ModelStringInput | null,
  cost?: ModelFloatInput | null,
  packageID?: ModelIDInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Activity = {
  __typename: "Activity",
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  link?: string | null,
  packageName?: string | null,
  cost?: number | null,
  packageID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateActivityInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  link?: string | null,
  packageName?: string | null,
  cost?: number | null,
  packageID?: string | null,
};

export type DeleteActivityInput = {
  id: string,
};

export type CreateEnquiryInput = {
  id?: string | null,
  destination_name?: string | null,
  name?: string | null,
  email?: string | null,
  number_of_people?: number | null,
  vacation_type?: string | null,
  phone_number?: string | null,
};

export type ModelEnquiryConditionInput = {
  destination_name?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  number_of_people?: ModelIntInput | null,
  vacation_type?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  and?: Array< ModelEnquiryConditionInput | null > | null,
  or?: Array< ModelEnquiryConditionInput | null > | null,
  not?: ModelEnquiryConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Enquiry = {
  __typename: "Enquiry",
  id: string,
  destination_name?: string | null,
  name?: string | null,
  email?: string | null,
  number_of_people?: number | null,
  vacation_type?: string | null,
  phone_number?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEnquiryInput = {
  id: string,
  destination_name?: string | null,
  name?: string | null,
  email?: string | null,
  number_of_people?: number | null,
  vacation_type?: string | null,
  phone_number?: string | null,
};

export type DeleteEnquiryInput = {
  id: string,
};

export type CreateGalleryInput = {
  id?: string | null,
  image: string,
  packageID: string,
};

export type ModelGalleryConditionInput = {
  image?: ModelStringInput | null,
  packageID?: ModelIDInput | null,
  and?: Array< ModelGalleryConditionInput | null > | null,
  or?: Array< ModelGalleryConditionInput | null > | null,
  not?: ModelGalleryConditionInput | null,
};

export type Gallery = {
  __typename: "Gallery",
  id: string,
  image: string,
  packageID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGalleryInput = {
  id: string,
  image?: string | null,
  packageID?: string | null,
};

export type DeleteGalleryInput = {
  id: string,
};

export type CreateRegistrationInput = {
  id?: string | null,
  total_cost: number,
  userinfoID: string,
  activitiesId?: Array< string > | null,
  passengers?: Array< PassengerDetailsInput > | null,
  mainPassenger: MainPassengerInput,
  bookingStatus: string,
  packageName: string,
  registrationPackageId: string,
};

export type PassengerDetailsInput = {
  id?: string | null,
  birthdate: string,
  firstName: string,
  lastName: string,
};

export type MainPassengerInput = {
  firstName: string,
  lastName: string,
  birthdate: string,
  phoneNumber: string,
  email: string,
  starts: string,
  ends: string,
};

export type ModelRegistrationConditionInput = {
  total_cost?: ModelFloatInput | null,
  userinfoID?: ModelIDInput | null,
  activitiesId?: ModelStringInput | null,
  bookingStatus?: ModelStringInput | null,
  packageName?: ModelStringInput | null,
  and?: Array< ModelRegistrationConditionInput | null > | null,
  or?: Array< ModelRegistrationConditionInput | null > | null,
  not?: ModelRegistrationConditionInput | null,
  registrationPackageId?: ModelIDInput | null,
};

export type Registration = {
  __typename: "Registration",
  id: string,
  total_cost: number,
  userinfoID: string,
  Package: Package,
  activitiesId?: Array< string > | null,
  passengers?:  Array<PassengerDetails > | null,
  mainPassenger: MainPassenger,
  bookingStatus: string,
  packageName: string,
  createdAt: string,
  updatedAt: string,
  registrationPackageId: string,
};

export type Package = {
  __typename: "Package",
  id: string,
  name: string,
  contact: string,
  description: string,
  location: string,
  cost: number,
  image: string,
  details_file: string,
  is_premium_flag?: boolean | null,
  video_link?: string | null,
  Activities?: ModelActivityConnection | null,
  Galleries?: ModelActivityConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items:  Array<Activity | null >,
  nextToken?: string | null,
};

export type PassengerDetails = {
  __typename: "PassengerDetails",
  id?: string | null,
  birthdate: string,
  firstName: string,
  lastName: string,
};

export type MainPassenger = {
  __typename: "MainPassenger",
  firstName: string,
  lastName: string,
  birthdate: string,
  phoneNumber: string,
  email: string,
  starts: string,
  ends: string,
};

export type UpdateRegistrationInput = {
  id: string,
  total_cost?: number | null,
  userinfoID?: string | null,
  activitiesId?: Array< string > | null,
  passengers?: Array< PassengerDetailsInput > | null,
  mainPassenger?: MainPassengerInput | null,
  bookingStatus?: string | null,
  packageName?: string | null,
  registrationPackageId?: string | null,
};

export type DeleteRegistrationInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  review?: string | null,
};

export type ModelReviewConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  review?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  name?: string | null,
  email?: string | null,
  review?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReviewInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  review?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreatePackageInput = {
  id?: string | null,
  name: string,
  contact: string,
  description: string,
  location: string,
  cost: number,
  image: string,
  details_file: string,
  is_premium_flag?: boolean | null,
  video_link?: string | null,
};

export type ModelPackageConditionInput = {
  name?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  cost?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  details_file?: ModelStringInput | null,
  is_premium_flag?: ModelBooleanInput | null,
  video_link?: ModelStringInput | null,
  and?: Array< ModelPackageConditionInput | null > | null,
  or?: Array< ModelPackageConditionInput | null > | null,
  not?: ModelPackageConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePackageInput = {
  id: string,
  name?: string | null,
  contact?: string | null,
  description?: string | null,
  location?: string | null,
  cost?: number | null,
  image?: string | null,
  details_file?: string | null,
  is_premium_flag?: boolean | null,
  video_link?: string | null,
};

export type DeletePackageInput = {
  id: string,
};

export type CreateUserInfoInput = {
  id?: string | null,
  dob?: string | null,
  phone_number?: string | null,
  email?: string | null,
  name?: string | null,
};

export type ModelUserInfoConditionInput = {
  dob?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserInfoConditionInput | null > | null,
  or?: Array< ModelUserInfoConditionInput | null > | null,
  not?: ModelUserInfoConditionInput | null,
};

export type UserInfo = {
  __typename: "UserInfo",
  id: string,
  dob?: string | null,
  phone_number?: string | null,
  email?: string | null,
  Registrations?: ModelRegistrationConnection | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRegistrationConnection = {
  __typename: "ModelRegistrationConnection",
  items:  Array<Registration | null >,
  nextToken?: string | null,
};

export type UpdateUserInfoInput = {
  id: string,
  dob?: string | null,
  phone_number?: string | null,
  email?: string | null,
  name?: string | null,
};

export type DeleteUserInfoInput = {
  id: string,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  link?: ModelStringInput | null,
  packageName?: ModelStringInput | null,
  cost?: ModelFloatInput | null,
  packageID?: ModelIDInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEnquiryFilterInput = {
  id?: ModelIDInput | null,
  destination_name?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  number_of_people?: ModelIntInput | null,
  vacation_type?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  and?: Array< ModelEnquiryFilterInput | null > | null,
  or?: Array< ModelEnquiryFilterInput | null > | null,
  not?: ModelEnquiryFilterInput | null,
};

export type ModelEnquiryConnection = {
  __typename: "ModelEnquiryConnection",
  items:  Array<Enquiry | null >,
  nextToken?: string | null,
};

export type ModelGalleryFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  packageID?: ModelIDInput | null,
  and?: Array< ModelGalleryFilterInput | null > | null,
  or?: Array< ModelGalleryFilterInput | null > | null,
  not?: ModelGalleryFilterInput | null,
};

export type ModelGalleryConnection = {
  __typename: "ModelGalleryConnection",
  items:  Array<Gallery | null >,
  nextToken?: string | null,
};

export type ModelRegistrationFilterInput = {
  id?: ModelIDInput | null,
  total_cost?: ModelFloatInput | null,
  userinfoID?: ModelIDInput | null,
  activitiesId?: ModelStringInput | null,
  bookingStatus?: ModelStringInput | null,
  packageName?: ModelStringInput | null,
  and?: Array< ModelRegistrationFilterInput | null > | null,
  or?: Array< ModelRegistrationFilterInput | null > | null,
  not?: ModelRegistrationFilterInput | null,
  registrationPackageId?: ModelIDInput | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  review?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type ModelPackageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  cost?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  details_file?: ModelStringInput | null,
  is_premium_flag?: ModelBooleanInput | null,
  video_link?: ModelStringInput | null,
  and?: Array< ModelPackageFilterInput | null > | null,
  or?: Array< ModelPackageFilterInput | null > | null,
  not?: ModelPackageFilterInput | null,
};

export type ModelPackageConnection = {
  __typename: "ModelPackageConnection",
  items:  Array<Package | null >,
  nextToken?: string | null,
};

export type ModelUserInfoFilterInput = {
  id?: ModelIDInput | null,
  dob?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserInfoFilterInput | null > | null,
  or?: Array< ModelUserInfoFilterInput | null > | null,
  not?: ModelUserInfoFilterInput | null,
};

export type ModelUserInfoConnection = {
  __typename: "ModelUserInfoConnection",
  items:  Array<UserInfo | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  packageName?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionFloatInput | null,
  packageID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivityFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionEnquiryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  destination_name?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  number_of_people?: ModelSubscriptionIntInput | null,
  vacation_type?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnquiryFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnquiryFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionGalleryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  packageID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionGalleryFilterInput | null > | null,
  or?: Array< ModelSubscriptionGalleryFilterInput | null > | null,
};

export type ModelSubscriptionRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  total_cost?: ModelSubscriptionFloatInput | null,
  userinfoID?: ModelSubscriptionIDInput | null,
  activitiesId?: ModelSubscriptionStringInput | null,
  bookingStatus?: ModelSubscriptionStringInput | null,
  packageName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionRegistrationFilterInput | null > | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  review?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
};

export type ModelSubscriptionPackageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  contact?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionFloatInput | null,
  image?: ModelSubscriptionStringInput | null,
  details_file?: ModelSubscriptionStringInput | null,
  is_premium_flag?: ModelSubscriptionBooleanInput | null,
  video_link?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPackageFilterInput | null > | null,
  or?: Array< ModelSubscriptionPackageFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dob?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    link?: string | null,
    packageName?: string | null,
    cost?: number | null,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    link?: string | null,
    packageName?: string | null,
    cost?: number | null,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    link?: string | null,
    packageName?: string | null,
    cost?: number | null,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEnquiryMutationVariables = {
  input: CreateEnquiryInput,
  condition?: ModelEnquiryConditionInput | null,
};

export type CreateEnquiryMutation = {
  createEnquiry?:  {
    __typename: "Enquiry",
    id: string,
    destination_name?: string | null,
    name?: string | null,
    email?: string | null,
    number_of_people?: number | null,
    vacation_type?: string | null,
    phone_number?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEnquiryMutationVariables = {
  input: UpdateEnquiryInput,
  condition?: ModelEnquiryConditionInput | null,
};

export type UpdateEnquiryMutation = {
  updateEnquiry?:  {
    __typename: "Enquiry",
    id: string,
    destination_name?: string | null,
    name?: string | null,
    email?: string | null,
    number_of_people?: number | null,
    vacation_type?: string | null,
    phone_number?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEnquiryMutationVariables = {
  input: DeleteEnquiryInput,
  condition?: ModelEnquiryConditionInput | null,
};

export type DeleteEnquiryMutation = {
  deleteEnquiry?:  {
    __typename: "Enquiry",
    id: string,
    destination_name?: string | null,
    name?: string | null,
    email?: string | null,
    number_of_people?: number | null,
    vacation_type?: string | null,
    phone_number?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGalleryMutationVariables = {
  input: CreateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type CreateGalleryMutation = {
  createGallery?:  {
    __typename: "Gallery",
    id: string,
    image: string,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGalleryMutationVariables = {
  input: UpdateGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type UpdateGalleryMutation = {
  updateGallery?:  {
    __typename: "Gallery",
    id: string,
    image: string,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGalleryMutationVariables = {
  input: DeleteGalleryInput,
  condition?: ModelGalleryConditionInput | null,
};

export type DeleteGalleryMutation = {
  deleteGallery?:  {
    __typename: "Gallery",
    id: string,
    image: string,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRegistrationMutationVariables = {
  input: CreateRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type CreateRegistrationMutation = {
  createRegistration?:  {
    __typename: "Registration",
    id: string,
    total_cost: number,
    userinfoID: string,
    Package:  {
      __typename: "Package",
      id: string,
      name: string,
      contact: string,
      description: string,
      location: string,
      cost: number,
      image: string,
      details_file: string,
      is_premium_flag?: boolean | null,
      video_link?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    activitiesId?: Array< string > | null,
    passengers?:  Array< {
      __typename: "PassengerDetails",
      id?: string | null,
      birthdate: string,
      firstName: string,
      lastName: string,
    } > | null,
    mainPassenger:  {
      __typename: "MainPassenger",
      firstName: string,
      lastName: string,
      birthdate: string,
      phoneNumber: string,
      email: string,
      starts: string,
      ends: string,
    },
    bookingStatus: string,
    packageName: string,
    createdAt: string,
    updatedAt: string,
    registrationPackageId: string,
  } | null,
};

export type UpdateRegistrationMutationVariables = {
  input: UpdateRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type UpdateRegistrationMutation = {
  updateRegistration?:  {
    __typename: "Registration",
    id: string,
    total_cost: number,
    userinfoID: string,
    Package:  {
      __typename: "Package",
      id: string,
      name: string,
      contact: string,
      description: string,
      location: string,
      cost: number,
      image: string,
      details_file: string,
      is_premium_flag?: boolean | null,
      video_link?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    activitiesId?: Array< string > | null,
    passengers?:  Array< {
      __typename: "PassengerDetails",
      id?: string | null,
      birthdate: string,
      firstName: string,
      lastName: string,
    } > | null,
    mainPassenger:  {
      __typename: "MainPassenger",
      firstName: string,
      lastName: string,
      birthdate: string,
      phoneNumber: string,
      email: string,
      starts: string,
      ends: string,
    },
    bookingStatus: string,
    packageName: string,
    createdAt: string,
    updatedAt: string,
    registrationPackageId: string,
  } | null,
};

export type DeleteRegistrationMutationVariables = {
  input: DeleteRegistrationInput,
  condition?: ModelRegistrationConditionInput | null,
};

export type DeleteRegistrationMutation = {
  deleteRegistration?:  {
    __typename: "Registration",
    id: string,
    total_cost: number,
    userinfoID: string,
    Package:  {
      __typename: "Package",
      id: string,
      name: string,
      contact: string,
      description: string,
      location: string,
      cost: number,
      image: string,
      details_file: string,
      is_premium_flag?: boolean | null,
      video_link?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    activitiesId?: Array< string > | null,
    passengers?:  Array< {
      __typename: "PassengerDetails",
      id?: string | null,
      birthdate: string,
      firstName: string,
      lastName: string,
    } > | null,
    mainPassenger:  {
      __typename: "MainPassenger",
      firstName: string,
      lastName: string,
      birthdate: string,
      phoneNumber: string,
      email: string,
      starts: string,
      ends: string,
    },
    bookingStatus: string,
    packageName: string,
    createdAt: string,
    updatedAt: string,
    registrationPackageId: string,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    name?: string | null,
    email?: string | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    name?: string | null,
    email?: string | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    name?: string | null,
    email?: string | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePackageMutationVariables = {
  input: CreatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type CreatePackageMutation = {
  createPackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    contact: string,
    description: string,
    location: string,
    cost: number,
    image: string,
    details_file: string,
    is_premium_flag?: boolean | null,
    video_link?: string | null,
    Activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    Galleries?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePackageMutationVariables = {
  input: UpdatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type UpdatePackageMutation = {
  updatePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    contact: string,
    description: string,
    location: string,
    cost: number,
    image: string,
    details_file: string,
    is_premium_flag?: boolean | null,
    video_link?: string | null,
    Activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    Galleries?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePackageMutationVariables = {
  input: DeletePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type DeletePackageMutation = {
  deletePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    contact: string,
    description: string,
    location: string,
    cost: number,
    image: string,
    details_file: string,
    is_premium_flag?: boolean | null,
    video_link?: string | null,
    Activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    Galleries?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserInfoMutationVariables = {
  input: CreateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type CreateUserInfoMutation = {
  createUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    Registrations?:  {
      __typename: "ModelRegistrationConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserInfoMutationVariables = {
  input: UpdateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type UpdateUserInfoMutation = {
  updateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    Registrations?:  {
      __typename: "ModelRegistrationConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserInfoMutationVariables = {
  input: DeleteUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type DeleteUserInfoMutation = {
  deleteUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    Registrations?:  {
      __typename: "ModelRegistrationConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    link?: string | null,
    packageName?: string | null,
    cost?: number | null,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitiesQuery = {
  listActivities?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      link?: string | null,
      packageName?: string | null,
      cost?: number | null,
      packageID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ActivitiesByPackageIDQueryVariables = {
  packageID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ActivitiesByPackageIDQuery = {
  activitiesByPackageID?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      name?: string | null,
      description?: string | null,
      image?: string | null,
      link?: string | null,
      packageName?: string | null,
      cost?: number | null,
      packageID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEnquiryQueryVariables = {
  id: string,
};

export type GetEnquiryQuery = {
  getEnquiry?:  {
    __typename: "Enquiry",
    id: string,
    destination_name?: string | null,
    name?: string | null,
    email?: string | null,
    number_of_people?: number | null,
    vacation_type?: string | null,
    phone_number?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEnquiriesQueryVariables = {
  filter?: ModelEnquiryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnquiriesQuery = {
  listEnquiries?:  {
    __typename: "ModelEnquiryConnection",
    items:  Array< {
      __typename: "Enquiry",
      id: string,
      destination_name?: string | null,
      name?: string | null,
      email?: string | null,
      number_of_people?: number | null,
      vacation_type?: string | null,
      phone_number?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryQueryVariables = {
  id: string,
};

export type GetGalleryQuery = {
  getGallery?:  {
    __typename: "Gallery",
    id: string,
    image: string,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGalleriesQueryVariables = {
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGalleriesQuery = {
  listGalleries?:  {
    __typename: "ModelGalleryConnection",
    items:  Array< {
      __typename: "Gallery",
      id: string,
      image: string,
      packageID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GalleriesByPackageIDQueryVariables = {
  packageID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGalleryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GalleriesByPackageIDQuery = {
  galleriesByPackageID?:  {
    __typename: "ModelGalleryConnection",
    items:  Array< {
      __typename: "Gallery",
      id: string,
      image: string,
      packageID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRegistrationQueryVariables = {
  id: string,
};

export type GetRegistrationQuery = {
  getRegistration?:  {
    __typename: "Registration",
    id: string,
    total_cost: number,
    userinfoID: string,
    Package:  {
      __typename: "Package",
      id: string,
      name: string,
      contact: string,
      description: string,
      location: string,
      cost: number,
      image: string,
      details_file: string,
      is_premium_flag?: boolean | null,
      video_link?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    activitiesId?: Array< string > | null,
    passengers?:  Array< {
      __typename: "PassengerDetails",
      id?: string | null,
      birthdate: string,
      firstName: string,
      lastName: string,
    } > | null,
    mainPassenger:  {
      __typename: "MainPassenger",
      firstName: string,
      lastName: string,
      birthdate: string,
      phoneNumber: string,
      email: string,
      starts: string,
      ends: string,
    },
    bookingStatus: string,
    packageName: string,
    createdAt: string,
    updatedAt: string,
    registrationPackageId: string,
  } | null,
};

export type ListRegistrationsQueryVariables = {
  filter?: ModelRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRegistrationsQuery = {
  listRegistrations?:  {
    __typename: "ModelRegistrationConnection",
    items:  Array< {
      __typename: "Registration",
      id: string,
      total_cost: number,
      userinfoID: string,
      activitiesId?: Array< string > | null,
      bookingStatus: string,
      packageName: string,
      createdAt: string,
      updatedAt: string,
      registrationPackageId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RegistrationsByUserinfoIDQueryVariables = {
  userinfoID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RegistrationsByUserinfoIDQuery = {
  registrationsByUserinfoID?:  {
    __typename: "ModelRegistrationConnection",
    items:  Array< {
      __typename: "Registration",
      id: string,
      total_cost: number,
      userinfoID: string,
      activitiesId?: Array< string > | null,
      bookingStatus: string,
      packageName: string,
      createdAt: string,
      updatedAt: string,
      registrationPackageId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    name?: string | null,
    email?: string | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      name?: string | null,
      email?: string | null,
      review?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPackageQueryVariables = {
  id: string,
};

export type GetPackageQuery = {
  getPackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    contact: string,
    description: string,
    location: string,
    cost: number,
    image: string,
    details_file: string,
    is_premium_flag?: boolean | null,
    video_link?: string | null,
    Activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    Galleries?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPackagesQueryVariables = {
  filter?: ModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPackagesQuery = {
  listPackages?:  {
    __typename: "ModelPackageConnection",
    items:  Array< {
      __typename: "Package",
      id: string,
      name: string,
      contact: string,
      description: string,
      location: string,
      cost: number,
      image: string,
      details_file: string,
      is_premium_flag?: boolean | null,
      video_link?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserInfoQueryVariables = {
  id: string,
};

export type GetUserInfoQuery = {
  getUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    Registrations?:  {
      __typename: "ModelRegistrationConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserInfosQuery = {
  listUserInfos?:  {
    __typename: "ModelUserInfoConnection",
    items:  Array< {
      __typename: "UserInfo",
      id: string,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    link?: string | null,
    packageName?: string | null,
    cost?: number | null,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    link?: string | null,
    packageName?: string | null,
    cost?: number | null,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    description?: string | null,
    image?: string | null,
    link?: string | null,
    packageName?: string | null,
    cost?: number | null,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEnquirySubscriptionVariables = {
  filter?: ModelSubscriptionEnquiryFilterInput | null,
};

export type OnCreateEnquirySubscription = {
  onCreateEnquiry?:  {
    __typename: "Enquiry",
    id: string,
    destination_name?: string | null,
    name?: string | null,
    email?: string | null,
    number_of_people?: number | null,
    vacation_type?: string | null,
    phone_number?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEnquirySubscriptionVariables = {
  filter?: ModelSubscriptionEnquiryFilterInput | null,
};

export type OnUpdateEnquirySubscription = {
  onUpdateEnquiry?:  {
    __typename: "Enquiry",
    id: string,
    destination_name?: string | null,
    name?: string | null,
    email?: string | null,
    number_of_people?: number | null,
    vacation_type?: string | null,
    phone_number?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEnquirySubscriptionVariables = {
  filter?: ModelSubscriptionEnquiryFilterInput | null,
};

export type OnDeleteEnquirySubscription = {
  onDeleteEnquiry?:  {
    __typename: "Enquiry",
    id: string,
    destination_name?: string | null,
    name?: string | null,
    email?: string | null,
    number_of_people?: number | null,
    vacation_type?: string | null,
    phone_number?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
};

export type OnCreateGallerySubscription = {
  onCreateGallery?:  {
    __typename: "Gallery",
    id: string,
    image: string,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
};

export type OnUpdateGallerySubscription = {
  onUpdateGallery?:  {
    __typename: "Gallery",
    id: string,
    image: string,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGallerySubscriptionVariables = {
  filter?: ModelSubscriptionGalleryFilterInput | null,
};

export type OnDeleteGallerySubscription = {
  onDeleteGallery?:  {
    __typename: "Gallery",
    id: string,
    image: string,
    packageID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationFilterInput | null,
};

export type OnCreateRegistrationSubscription = {
  onCreateRegistration?:  {
    __typename: "Registration",
    id: string,
    total_cost: number,
    userinfoID: string,
    Package:  {
      __typename: "Package",
      id: string,
      name: string,
      contact: string,
      description: string,
      location: string,
      cost: number,
      image: string,
      details_file: string,
      is_premium_flag?: boolean | null,
      video_link?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    activitiesId?: Array< string > | null,
    passengers?:  Array< {
      __typename: "PassengerDetails",
      id?: string | null,
      birthdate: string,
      firstName: string,
      lastName: string,
    } > | null,
    mainPassenger:  {
      __typename: "MainPassenger",
      firstName: string,
      lastName: string,
      birthdate: string,
      phoneNumber: string,
      email: string,
      starts: string,
      ends: string,
    },
    bookingStatus: string,
    packageName: string,
    createdAt: string,
    updatedAt: string,
    registrationPackageId: string,
  } | null,
};

export type OnUpdateRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationFilterInput | null,
};

export type OnUpdateRegistrationSubscription = {
  onUpdateRegistration?:  {
    __typename: "Registration",
    id: string,
    total_cost: number,
    userinfoID: string,
    Package:  {
      __typename: "Package",
      id: string,
      name: string,
      contact: string,
      description: string,
      location: string,
      cost: number,
      image: string,
      details_file: string,
      is_premium_flag?: boolean | null,
      video_link?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    activitiesId?: Array< string > | null,
    passengers?:  Array< {
      __typename: "PassengerDetails",
      id?: string | null,
      birthdate: string,
      firstName: string,
      lastName: string,
    } > | null,
    mainPassenger:  {
      __typename: "MainPassenger",
      firstName: string,
      lastName: string,
      birthdate: string,
      phoneNumber: string,
      email: string,
      starts: string,
      ends: string,
    },
    bookingStatus: string,
    packageName: string,
    createdAt: string,
    updatedAt: string,
    registrationPackageId: string,
  } | null,
};

export type OnDeleteRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionRegistrationFilterInput | null,
};

export type OnDeleteRegistrationSubscription = {
  onDeleteRegistration?:  {
    __typename: "Registration",
    id: string,
    total_cost: number,
    userinfoID: string,
    Package:  {
      __typename: "Package",
      id: string,
      name: string,
      contact: string,
      description: string,
      location: string,
      cost: number,
      image: string,
      details_file: string,
      is_premium_flag?: boolean | null,
      video_link?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    activitiesId?: Array< string > | null,
    passengers?:  Array< {
      __typename: "PassengerDetails",
      id?: string | null,
      birthdate: string,
      firstName: string,
      lastName: string,
    } > | null,
    mainPassenger:  {
      __typename: "MainPassenger",
      firstName: string,
      lastName: string,
      birthdate: string,
      phoneNumber: string,
      email: string,
      starts: string,
      ends: string,
    },
    bookingStatus: string,
    packageName: string,
    createdAt: string,
    updatedAt: string,
    registrationPackageId: string,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    name?: string | null,
    email?: string | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    name?: string | null,
    email?: string | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    name?: string | null,
    email?: string | null,
    review?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnCreatePackageSubscription = {
  onCreatePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    contact: string,
    description: string,
    location: string,
    cost: number,
    image: string,
    details_file: string,
    is_premium_flag?: boolean | null,
    video_link?: string | null,
    Activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    Galleries?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnUpdatePackageSubscription = {
  onUpdatePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    contact: string,
    description: string,
    location: string,
    cost: number,
    image: string,
    details_file: string,
    is_premium_flag?: boolean | null,
    video_link?: string | null,
    Activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    Galleries?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePackageSubscriptionVariables = {
  filter?: ModelSubscriptionPackageFilterInput | null,
};

export type OnDeletePackageSubscription = {
  onDeletePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    contact: string,
    description: string,
    location: string,
    cost: number,
    image: string,
    details_file: string,
    is_premium_flag?: boolean | null,
    video_link?: string | null,
    Activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    Galleries?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnCreateUserInfoSubscription = {
  onCreateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    Registrations?:  {
      __typename: "ModelRegistrationConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnUpdateUserInfoSubscription = {
  onUpdateUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    Registrations?:  {
      __typename: "ModelRegistrationConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnDeleteUserInfoSubscription = {
  onDeleteUserInfo?:  {
    __typename: "UserInfo",
    id: string,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    Registrations?:  {
      __typename: "ModelRegistrationConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
