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
