'use client'

import { useState } from 'react'
import ServiceSelector from '../../components/ServiceSelector'

/** @typedef {import('@/lib/types/booking').ServiceType} ServiceType */

export default function BookingServicesClient() {
  /** @type {[ServiceType | null, (service: ServiceType) => void]} */
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-foreground">Book a Discovery Call</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Select a service, then choose a preferred date.
          </p>
        </header>

        <ServiceSelector selected={selectedService} onSelect={setSelectedService} />

        {/* {selectedService && (
          <section className="mx-auto mt-10 max-w-md rounded-lg border border-border bg-background p-6">
            <label htmlFor="booking-date" className="block text-lg font-semibold text-foreground">
              Choose a date
            </label>
            <input
              id="booking-date"
              type="date"
              value={selectedDate}
              min={new Date().toISOString().slice(0, 10)}
              onChange={(event) => setSelectedDate(event.target.value)}
              className="mt-3 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground"
            />
          </section>
        )} */}
      </div>
    </main>
  )
}