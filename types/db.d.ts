import { Role } from '@prisma/client'

interface User {
  id: string
  name: string
  email: string
  image: string
  role: Role
  dob: Date
  phone: Number
  gender: String
}
