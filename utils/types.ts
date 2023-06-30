import { Package,Activity } from "src/API"

/* eslint-disable no-unused-vars */
export type User = {
  name?: string
  email?: string
  gender?: string
  password?: string
  isOAuth?: boolean
  bookedPackages?: string[]
  profile_img?: string
}


export interface HomePageProps {
  featured_data?: Package[] | null
  activities_data?: Activity[] | null
}

export interface TripsPageProps {
  packages_data?: Package[] | null
  activities_data?: any
}



export type FeaturedDestination = Trip & {
  video_link?: string
  is_premium_flag?: boolean
}

export type Trip = {
  id?: string
  location?: string
  cost?: number
  contact?: string
  image?: string
  name?: string
  description?: string
  details_file?: string
  is_premium_flag?: boolean,
  video_link?:string,
}

export type Transaction = {
  passengers: []
  id: string
  mainPassenger: []
  packageName: string
  userInfoID: string
  starts?: string
  ends?: string
  bookingStatus: string
  total_cost: string
}

export interface TransactionPageProps {
  data?: Transaction[]
}

export interface BookNowProps {
  packages_data?: Package
  activities?: any
}

export interface ExtraPassengerProps {
  num: number
  onToggle: () => void
  handleExtraPassengers: (num?: number, passenger?: ExtraPassengersType) => void
}

export interface BookNowFormType {
  packagesid?: string
  suffix?: 'mr' | 'mrs'
  fname?: string
  mname?: string
  lname?: string
  email?: string
  phone?: string
  persons?: ExtraPassengersType[]
  dob?: string
  from?: string
  to?: string
}

export interface ExtraPassengersType {
  suffix?: 'mr' | 'mrs'
  fname?: string
  lname?: string
  birthdate?: string
}
export interface GalleryPageProps {
  data: Gallery[]
}

export type Gallery = {
  id?: string
  image?: string
}
