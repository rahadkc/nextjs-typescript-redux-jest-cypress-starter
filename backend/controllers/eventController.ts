//@ts-nocheck
import { NextApiRequest, NextApiResponse } from 'next'
import EventModel, { IEvent } from '../models/eventModel'
import mongoose from 'mongoose'

export const getEvents = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const events: IEvent[] = await getWeekEvents(req)

    const eventsJSON = events.map(event => event.toJSON())

    res.status(200).json(eventsJSON)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const getEvent = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.id as string

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(404).json({ error: 'No such Event' })
    return
  }

  try {
    const event: IEvent | null = await EventModel.findById(eventId)
    if (!event) {
      res.status(404).json({ error: 'No such Event' })
      return
    }
    res.status(200).json(event.toJSON())
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const createEvent = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventData: IEvent = req.body as IEvent

  const emptyFields: string[] = []

  if (!eventData.title) {
    emptyFields.push('title')
  }

  if (emptyFields.length > 0) {
    res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    return
  }

  try {
    const newEvent: IEvent = await EventModel.create(eventData)
    res.status(200).json({ result: newEvent.toJSON(), status: 'success' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteEvent = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.id as string

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ error: 'Something is wrong' })
    return
  }

  try {
    const deletedEvent: IEvent | null = await EventModel.findByIdAndDelete(eventId)
    if (!deletedEvent) {
      res.status(400).json({ error: 'No such Event' })
      return
    }
    res.status(200).json({ status: 'success' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const updateEvent = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.id as string

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ error: 'No such Event' })
    return
  }

  const eventData: IEvent = req.body as IEvent

  try {
    const updatedEvent: IEvent | null = await EventModel.findByIdAndUpdate(eventId, eventData, {
      new: true,
    })
    if (!updatedEvent) {
      res.status(400).json({ error: 'No such Event' })
      return
    }
    res.status(200).json({ result: updatedEvent.toJSON(), status: 'success' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const getWeekEvents = async (req: NextApiRequest) => {
  const userProvidedStartDate = req.query.date as string

  try {
    let dateWithoutTimeZone = ''
    if (userProvidedStartDate) {
      dateWithoutTimeZone = userProvidedStartDate.replace('Z', '')
    }

    const startDate =
      userProvidedStartDate && !isNaN(Date.parse(dateWithoutTimeZone))
        ? new Date(dateWithoutTimeZone)
        : new Date()

    // Calculate the start date of the week (Sunday) based on the provided date
    const startOfWeek = new Date(startDate)
    startOfWeek.setDate(startDate.getDate() - 1)
    startOfWeek.setHours(0, 0, 0, 0)
    console.log('startOfWeek::', startOfWeek)

    // Calculate the end date of the week (Saturday)
    const endOfWeek = new Date(startDate)
    endOfWeek.setDate(startDate.getDate() + 6)
    console.log('endOfWeek::', endOfWeek)

    // Construct a filter object for the week
    const filterWeek: { start: { $gte: Date; $lte: Date } } = {
      start: { $gte: startOfWeek, $lte: endOfWeek },
    }

    const filterRecurring: { recurring: { $ne: string } } = {
      recurring: { $ne: 'none' },
    }

    // Combine the filter conditions using the logical OR operator
    const filter = {
      $or: [filterWeek, filterRecurring],
    }

    console.log('filter', filter)

    // Query the database for events in the specified week
    const eventsForWeek: IEvent[] = await EventModel.find(filter)

    return eventsForWeek
  } catch (error) {
    throw new Error('Internal Server Error')
  }
}
