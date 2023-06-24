/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onCreateActivity(filter: $filter) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onUpdateActivity(filter: $filter) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($filter: ModelSubscriptionActivityFilterInput) {
    onDeleteActivity(filter: $filter) {
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
export const onCreateEnquiry = /* GraphQL */ `
  subscription OnCreateEnquiry($filter: ModelSubscriptionEnquiryFilterInput) {
    onCreateEnquiry(filter: $filter) {
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
export const onUpdateEnquiry = /* GraphQL */ `
  subscription OnUpdateEnquiry($filter: ModelSubscriptionEnquiryFilterInput) {
    onUpdateEnquiry(filter: $filter) {
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
export const onDeleteEnquiry = /* GraphQL */ `
  subscription OnDeleteEnquiry($filter: ModelSubscriptionEnquiryFilterInput) {
    onDeleteEnquiry(filter: $filter) {
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
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery($filter: ModelSubscriptionGalleryFilterInput) {
    onCreateGallery(filter: $filter) {
      id
      image
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery($filter: ModelSubscriptionGalleryFilterInput) {
    onUpdateGallery(filter: $filter) {
      id
      image
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery($filter: ModelSubscriptionGalleryFilterInput) {
    onDeleteGallery(filter: $filter) {
      id
      image
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRegistration = /* GraphQL */ `
  subscription OnCreateRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onCreateRegistration(filter: $filter) {
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
export const onUpdateRegistration = /* GraphQL */ `
  subscription OnUpdateRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onUpdateRegistration(filter: $filter) {
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
export const onDeleteRegistration = /* GraphQL */ `
  subscription OnDeleteRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onDeleteRegistration(filter: $filter) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
    onCreateReview(filter: $filter) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
    onUpdateReview(filter: $filter) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
    onDeleteReview(filter: $filter) {
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
export const onCreatePackage = /* GraphQL */ `
  subscription OnCreatePackage($filter: ModelSubscriptionPackageFilterInput) {
    onCreatePackage(filter: $filter) {
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
export const onUpdatePackage = /* GraphQL */ `
  subscription OnUpdatePackage($filter: ModelSubscriptionPackageFilterInput) {
    onUpdatePackage(filter: $filter) {
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
export const onDeletePackage = /* GraphQL */ `
  subscription OnDeletePackage($filter: ModelSubscriptionPackageFilterInput) {
    onDeletePackage(filter: $filter) {
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
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onCreateUserInfo(filter: $filter) {
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
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onUpdateUserInfo(filter: $filter) {
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
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onDeleteUserInfo(filter: $filter) {
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
