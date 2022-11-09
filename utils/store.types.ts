/* eslint-disable no-unused-vars */
import type { Activity, Trip } from './types'

export interface TripStore {
  trips: Trip[]
  singleTripById: Trip
  fetchTrips: () => Promise<void>
  fetchSingleTripById: (id: string) => Promise<void>
}

export interface ActivityStore {
  activities: Activity[]
  fetchActivities: () => Promise<void>
}
