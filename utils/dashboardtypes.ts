export type User = {
  id?: string
  name?: string
  dob?: Date | string
  phone?: number | string
  email?: string
  gender?: string
  password?: string
  isOAuth?: string
  bookedPackages?: PackageRegistration[]
  profile_img?: string
  role?: string
}

export type Package = {
  id?: string
  name?: string
  contact?: string
  description?: string
  location?: String
  cost?: number
  image?: string
  activities?: string[]
  details_file?: string
  users_booked?: PackageRegistration[]
  updatedAt?: Date | string
  video_link?: string
  is_premium_flag?: Boolean
}
export type Passenger = {
  id?: string
  first_name?: string
  middle_name?: string
  last_name?: string
  age?: number
  phone_no?: string
  email?: string
  packageRegistration?: PackageRegistration[]
}
export type PackageRegistration = {
  id?: string
  number_of_passengers?: number
  accompanying?: Passenger[]
  total_cost?: number
  transaction?: Transactions
  transactionsId?: string
  user?: User
  userId?: String
  package?: Package
  packageId?: String
  // from?:                 Date
  // to?:                   Date
}

enum Status {
  BOOKED,
  REFUNDED,
  CANCELLED
}

export type Transactions = {
  id?: String
  package_registered?: PackageRegistration
  status?: Status
}

export type Activity = {
  id?: string
  name?: string
  description?: string
  image?: string
}
