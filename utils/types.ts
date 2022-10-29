export type User = {
  name?: string
  email?: string
  imageUrl?: string
}

export interface HomePageProps {
  featured_data: any
  activities_data: Activity[]
}

export interface TripsPageProps {
  activities_data: Activity[]
  packages_data: Trip[]
}

export type Activity = {
  _id: string
  name: string
  description: string
  image: string
  campId: string
}

export type Trip = {
  _id: string
  location: string
  price: string
  activities: string[]
  duration: string
  image: string
  name: string
}

export type Transaction = {
  nid: number
  img: string
  place: string
  date: string
  guest: number
  cost: string
  status: boolean
}

export interface TransactionPageProps {
  data: Transaction[]
}
