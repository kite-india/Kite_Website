/* eslint-disable no-unused-vars */
import axios from 'axios'
import create from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Trip } from '../types'

type TripsStore = {
  trips: Trip[]
  singleTripById: Trip
  fetchTrips: () => Promise<void>
  fetchSingleTripById: (id: string) => Promise<void>
}

export const useTripsStore = create<TripsStore>()(
  devtools(set => ({
    trips: [],
    singleTripById: {},
    fetchTrips: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package`
      )
      set({ trips: data })
    },
    fetchSingleTripById: async (id: string) => {
      const { data }: { data: Trip } = await axios.get(
        `${process.env.NEXT_PUBLIC_KITE_BACKEND}/package/${id}`
      )
      set({ singleTripById: data })
    }
  }))
)
