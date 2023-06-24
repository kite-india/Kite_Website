/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      name
      description
      image
      link
      packageName
      cost
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
      id
      name
      description
      image
      link
      packageName
      cost
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
      id
      name
      description
      image
      link
      packageName
      cost
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEnquiry = /* GraphQL */ `
  mutation CreateEnquiry(
    $input: CreateEnquiryInput!
    $condition: ModelEnquiryConditionInput
  ) {
    createEnquiry(input: $input, condition: $condition) {
      id
      destination_name
      name
      email
      number_of_people
      vacation_type
      phone_number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEnquiry = /* GraphQL */ `
  mutation UpdateEnquiry(
    $input: UpdateEnquiryInput!
    $condition: ModelEnquiryConditionInput
  ) {
    updateEnquiry(input: $input, condition: $condition) {
      id
      destination_name
      name
      email
      number_of_people
      vacation_type
      phone_number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEnquiry = /* GraphQL */ `
  mutation DeleteEnquiry(
    $input: DeleteEnquiryInput!
    $condition: ModelEnquiryConditionInput
  ) {
    deleteEnquiry(input: $input, condition: $condition) {
      id
      destination_name
      name
      email
      number_of_people
      vacation_type
      phone_number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGallery = /* GraphQL */ `
  mutation CreateGallery(
    $input: CreateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    createGallery(input: $input, condition: $condition) {
      id
      image
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGallery = /* GraphQL */ `
  mutation UpdateGallery(
    $input: UpdateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    updateGallery(input: $input, condition: $condition) {
      id
      image
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGallery = /* GraphQL */ `
  mutation DeleteGallery(
    $input: DeleteGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    deleteGallery(input: $input, condition: $condition) {
      id
      image
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRegistration = /* GraphQL */ `
  mutation CreateRegistration(
    $input: CreateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    createRegistration(input: $input, condition: $condition) {
      id
      total_cost
      userinfoID
      Package {
        id
        name
        contact
        description
        location
        cost
        image
        details_file
        is_premium_flag
        video_link
        duration
        createdAt
        updatedAt
        __typename
      }
      activitiesId
      passengers {
        id
        birthdate
        firstName
        lastName
        __typename
      }
      mainPassenger {
        firstName
        lastName
        birthdate
        phoneNumber
        email
        starts
        ends
        __typename
      }
      bookingStatus
      packageName
      createdAt
      updatedAt
      registrationPackageId
      __typename
    }
  }
`;
export const updateRegistration = /* GraphQL */ `
  mutation UpdateRegistration(
    $input: UpdateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    updateRegistration(input: $input, condition: $condition) {
      id
      total_cost
      userinfoID
      Package {
        id
        name
        contact
        description
        location
        cost
        image
        details_file
        is_premium_flag
        video_link
        duration
        createdAt
        updatedAt
        __typename
      }
      activitiesId
      passengers {
        id
        birthdate
        firstName
        lastName
        __typename
      }
      mainPassenger {
        firstName
        lastName
        birthdate
        phoneNumber
        email
        starts
        ends
        __typename
      }
      bookingStatus
      packageName
      createdAt
      updatedAt
      registrationPackageId
      __typename
    }
  }
`;
export const deleteRegistration = /* GraphQL */ `
  mutation DeleteRegistration(
    $input: DeleteRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    deleteRegistration(input: $input, condition: $condition) {
      id
      total_cost
      userinfoID
      Package {
        id
        name
        contact
        description
        location
        cost
        image
        details_file
        is_premium_flag
        video_link
        duration
        createdAt
        updatedAt
        __typename
      }
      activitiesId
      passengers {
        id
        birthdate
        firstName
        lastName
        __typename
      }
      mainPassenger {
        firstName
        lastName
        birthdate
        phoneNumber
        email
        starts
        ends
        __typename
      }
      bookingStatus
      packageName
      createdAt
      updatedAt
      registrationPackageId
      __typename
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      name
      email
      review
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      name
      email
      review
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      name
      email
      review
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPackage = /* GraphQL */ `
  mutation CreatePackage(
    $input: CreatePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    createPackage(input: $input, condition: $condition) {
      id
      name
      contact
      description
      location
      cost
      image
      details_file
      is_premium_flag
      video_link
      Activities {
        nextToken
        __typename
      }
      Galleries {
        nextToken
        __typename
      }
      duration
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePackage = /* GraphQL */ `
  mutation UpdatePackage(
    $input: UpdatePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    updatePackage(input: $input, condition: $condition) {
      id
      name
      contact
      description
      location
      cost
      image
      details_file
      is_premium_flag
      video_link
      Activities {
        nextToken
        __typename
      }
      Galleries {
        nextToken
        __typename
      }
      duration
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePackage = /* GraphQL */ `
  mutation DeletePackage(
    $input: DeletePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    deletePackage(input: $input, condition: $condition) {
      id
      name
      contact
      description
      location
      cost
      image
      details_file
      is_premium_flag
      video_link
      Activities {
        nextToken
        __typename
      }
      Galleries {
        nextToken
        __typename
      }
      duration
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
      id
      dob
      phone_number
      email
      Registrations {
        nextToken
        __typename
      }
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
      id
      dob
      phone_number
      email
      Registrations {
        nextToken
        __typename
      }
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
      id
      dob
      phone_number
      email
      Registrations {
        nextToken
        __typename
      }
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
