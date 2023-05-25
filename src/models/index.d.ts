import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly link?: string | null;
  readonly packageId?: string | null;
  readonly packageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly link?: string | null;
  readonly packageId?: string | null;
  readonly packageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Activity = LazyLoading extends LazyLoadingDisabled ? EagerActivity : LazyActivity

export declare const Activity: (new (init: ModelInit<Activity>) => Activity) & {
  copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}

type EagerEnquiry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enquiry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly destination_name?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly number_of_people?: number | null;
  readonly vacation_type?: string | null;
  readonly phone_number?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEnquiry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enquiry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly destination_name?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly number_of_people?: number | null;
  readonly vacation_type?: string | null;
  readonly phone_number?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Enquiry = LazyLoading extends LazyLoadingDisabled ? EagerEnquiry : LazyEnquiry

export declare const Enquiry: (new (init: ModelInit<Enquiry>) => Enquiry) & {
  copyOf(source: Enquiry, mutator: (draft: MutableModel<Enquiry>) => MutableModel<Enquiry> | void): Enquiry;
}

type EagerGallery = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gallery, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGallery = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Gallery, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Gallery = LazyLoading extends LazyLoadingDisabled ? EagerGallery : LazyGallery

export declare const Gallery: (new (init: ModelInit<Gallery>) => Gallery) & {
  copyOf(source: Gallery, mutator: (draft: MutableModel<Gallery>) => MutableModel<Gallery> | void): Gallery;
}

type EagerRegistration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Registration, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total_cost?: number | null;
  readonly userinfoID: string;
  readonly Package?: Package | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly registrationPackageId?: string | null;
}

type LazyRegistration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Registration, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total_cost?: number | null;
  readonly userinfoID: string;
  readonly Package: AsyncItem<Package | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly registrationPackageId?: string | null;
}

export declare type Registration = LazyLoading extends LazyLoadingDisabled ? EagerRegistration : LazyRegistration

export declare const Registration: (new (init: ModelInit<Registration>) => Registration) & {
  copyOf(source: Registration, mutator: (draft: MutableModel<Registration>) => MutableModel<Registration> | void): Registration;
}

type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly review?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly review?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerPackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Package, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly contact: string;
  readonly description: string;
  readonly location: string;
  readonly cost: number;
  readonly image: string;
  readonly details_file: string;
  readonly is_premium_flag?: string | null;
  readonly video_link?: string | null;
  readonly activities?: (Activity | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Package, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly contact: string;
  readonly description: string;
  readonly location: string;
  readonly cost: number;
  readonly image: string;
  readonly details_file: string;
  readonly is_premium_flag?: string | null;
  readonly video_link?: string | null;
  readonly activities: AsyncCollection<Activity>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Package = LazyLoading extends LazyLoadingDisabled ? EagerPackage : LazyPackage

export declare const Package: (new (init: ModelInit<Package>) => Package) & {
  copyOf(source: Package, mutator: (draft: MutableModel<Package>) => MutableModel<Package> | void): Package;
}

type EagerUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dob?: string | null;
  readonly phone_number?: string | null;
  readonly primary_phone?: string | null;
  readonly secondary_phone?: string | null;
  readonly email?: string | null;
  readonly Registrations?: (Registration | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dob?: string | null;
  readonly phone_number?: string | null;
  readonly primary_phone?: string | null;
  readonly secondary_phone?: string | null;
  readonly email?: string | null;
  readonly Registrations: AsyncCollection<Registration>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo>) => UserInfo) & {
  copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo>) => MutableModel<UserInfo> | void): UserInfo;
}