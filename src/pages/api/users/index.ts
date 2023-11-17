// import dbConnect from '../../../../db/mongoDbConnect'
// import {
//   getEvents,
//   createEvent,
//   deleteEvent,
//   updateEvent,
//   getEvent,
// } from '../../../../backend/controllers/eventController'
// import { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method, query } = req

//   await dbConnect()

//   switch (method) {
//     case 'GET':
//       if (query.id) {
//         await getEvent(req, res)
//       } else {
//         await getEvents(req, res)
//       }
//       break
//     case 'POST':
//       await createEvent(req, res)
//       break
//     case 'DELETE':
//       await deleteEvent(req, res)
//       break
//     case 'PUT':
//       await updateEvent(req, res)
//       break
//     default:
//       res.status(400).json({ success: false })
//       break
//   }
// }
