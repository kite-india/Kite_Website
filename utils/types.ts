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
  featured_data?: FeaturedDestination[] | null
  activities_data?: Activity[] | null
}

export interface TripsPageProps {
  packages_data?: Trip[] | null
}

export type Activity = {
  id?: string
  name?: string
  description?: string
  image?: string
}

export type FeaturedDestination = Trip & {
  video_link?: string
  is_premium_flag?: boolean
}

export type Trip = {
  id?: string
  location?: string
  cost?: string
  activities?: string[]
  contact?: string
  image?: string
  name?: string
  description?: string
}

export type Transaction = {
  id?: number
  img?: string
  place?: string
  date?: string
  guest?: number
  cost?: string
  status?: boolean
}

export interface TransactionPageProps {
  data?: Transaction[]
}

export interface BookNowProps {
  packages_data?: Trip
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
  dob?: Date | string
  from?: Date | string
  to?: Date | string
}

export interface ExtraPassengersType {
  suffix?: 'mr' | 'mrs'
  fname?: string
  lname?: string
  email?: string
  phone?: string
}
