//@ts-nocheck
import { NextApiRequest, NextApiResponse } from 'next'
import UserModel, { IEvent } from '../models/userModel'
import mongoose from 'mongoose'

export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.id as string

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(404).json({ error: 'No such Event' })
    return
  }

  try {
    const user: IEvent | null = await UserModel.findById(eventId)
    if (!user) {
      res.status(404).json({ error: 'No such user' })
      return
    }
    res.status(200).json(user.toJSON())
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
