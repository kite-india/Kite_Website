/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
      id
      name
      email
      phone_number
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone_number
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
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
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const activitiesByPackageID = /* GraphQL */ `
  query ActivitiesByPackageID(
    $packageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activitiesByPackageID(
      packageID: $packageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEnquiry = /* GraphQL */ `
  query GetEnquiry($id: ID!) {
    getEnquiry(id: $id) {
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
export const listEnquiries = /* GraphQL */ `
  query ListEnquiries(
    $filter: ModelEnquiryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnquiries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
      id
      image
      packageID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGalleries = /* GraphQL */ `
  query ListGalleries(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGalleries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        packageID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const galleriesByPackageID = /* GraphQL */ `
  query GalleriesByPackageID(
    $packageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    galleriesByPackageID(
      packageID: $packageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        image
        packageID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRegistration = /* GraphQL */ `
  query GetRegistration($id: ID!) {
    getRegistration(id: $id) {
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
        actual_cost
        have_flight
        have_hotels
        have_sightseeing
        have_meals
        have_transfers
        cities
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
        suffix
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
        suffix
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
export const listRegistrations = /* GraphQL */ `
  query ListRegistrations(
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        total_cost
        userinfoID
        activitiesId
        bookingStatus
        packageName
        createdAt
        updatedAt
        registrationPackageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const registrationsByUserinfoID = /* GraphQL */ `
  query RegistrationsByUserinfoID(
    $userinfoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    registrationsByUserinfoID(
      userinfoID: $userinfoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        total_cost
        userinfoID
        activitiesId
        bookingStatus
        packageName
        createdAt
        updatedAt
        registrationPackageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        review
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPackage = /* GraphQL */ `
  query GetPackage($id: ID!) {
    getPackage(id: $id) {
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
      actual_cost
      have_flight
      have_hotels
      have_sightseeing
      have_meals
      have_transfers
      cities
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPackages = /* GraphQL */ `
  query ListPackages(
    $filter: ModelPackageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        actual_cost
        have_flight
        have_hotels
        have_sightseeing
        have_meals
        have_transfers
        cities
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
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
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dob
        phone_number
        email
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
