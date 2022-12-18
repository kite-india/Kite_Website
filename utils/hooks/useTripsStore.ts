/* eslint-disable no-unused-vars */
import axios from 'axios'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Trip } from '../types'
import type { TripStore } from '../store.types'

const TripsStore = set => ({
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
})

export const useTripsStore = create<TripStore>()(
  persist(devtools(TripsStore, { name: 'trips-store' }), {
    name: 'trips-store',
    getStorage: () => sessionStorage
  })
)
