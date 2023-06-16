/* eslint-disable no-unused-vars */
import axios from 'axios'
import create, { StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Trip } from '../types'
import type { TripStore } from '../store.types'

const TripsStore: StateCreator<
  TripStore,
  [['zustand/devtools', 'never'], ['zustand/persist', unknown]],
  [],
  TripStore
> = set => ({
  trips: [],
  singleTripById: {},
  fetchTrips: async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_KITE_BACKEND}/packages`
    )
    set({ trips: data })
  },
  fetchSingleTripById: async (id: string) => {
    const { data }: { data: Trip } = await axios.get(
      `${process.env.NEXT_PUBLIC_KITE_BACKEND}/packages/${id}`
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
