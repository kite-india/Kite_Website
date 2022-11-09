/* eslint-disable no-unused-vars */
export type User = {
  name?: string
  email?: string
  imageUrl?: string
}

export interface HomePageProps {
  featured_data?: any | null
  activities_data?: Activity[] | null
}

export interface TripsPageProps {
  activities_data?: Activity[] | null
  packages_data?: Trip[] | null
}

export type Activity = {
  _id?: string
  name?: string
  description?: string
  image?: string
  campId?: string
}

export type Trip = {
  _id?: string
  location?: string
  price?: string
  activities?: string[]
  duration?: string
  image?: string
  name?: string
  description?: string
}

export type Transaction = {
  nid?: number
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
