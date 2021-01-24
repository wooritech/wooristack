import { NextApiRequest, NextApiResponse } from 'next';
import sampleNotes from 'utils/samples';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    body,
    method,
  } = req;

  console.log(`api/notes${id ? '/' + id : ''}`, method, body);

  try {
    if (!Array.isArray(sampleNotes)) {
      throw new Error('Cannot find user data');
    }

    switch (method) {
      case 'GET':
        // Get note by id
        const note = sampleNotes.find((note) => {
          if (note.id.toString() === id) return note;
        });
        res.status(200).json({ note });
        break;
      case 'PUT':
        // Update note
        res.status(200).json({});
        break;
      case 'DELETE':
        // Delete note
        res.status(200).json({});
        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;