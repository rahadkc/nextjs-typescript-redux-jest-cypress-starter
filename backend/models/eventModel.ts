import mongoose, { Schema, Document, Model } from 'mongoose'

mongoose.Promise = global.Promise
export type RecurringType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly'

export interface IEvent extends Document {
  title: string
  start: Date
  end: Date
  allDay: boolean
  description?: string
  note?: string
  recurring: RecurringType
  count?: number
  interval?: number
}

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: Date,
    allDay: {
      type: Boolean,
      default: false,
    },
    description: String,
    note: String,
    recurring: {
      type: String,
      default: 'none',
    },
    count: Number,
    interval: Number,
  },
  { timestamps: true, _id: true }
)

export default mongoose.models.Event
  ? mongoose.model('Event')
  : (mongoose.model<IEvent>('Event', eventSchema) as Model<IEvent>)
