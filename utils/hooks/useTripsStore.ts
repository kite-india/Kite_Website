/* eslint-disable no-unused-vars */
import axios from 'axios'
import create from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Trip } from '../types'
import type { TripStore } from '../store.types'

export const useTripsStore = create<TripStore>()(
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
