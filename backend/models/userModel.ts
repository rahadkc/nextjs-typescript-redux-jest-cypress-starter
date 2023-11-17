import mongoose, { Schema, Document, Model } from 'mongoose'

mongoose.Promise = global.Promise

enum Role {
  ADMIN = 'admin',
  USER = 'user',
  EDITOR = 'editor',
}

// Define the User interface to represent the document structure
interface User extends Document {
  username: string
  email: string
  password: string
  role: Role
  createdAt: Date
  updatedAt: Date
}

// Define the schema for the User model
const userSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
)

// Create and export the User model
// Check if the model is already registered

export default mongoose.models.User
  ? mongoose.model('User')
  : (mongoose.model<User>('User', userSchema) as Model<User>)
