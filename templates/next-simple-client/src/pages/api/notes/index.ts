import { NextApiRequest, NextApiResponse } from 'next';
import sampleNotes from 'utils/samples';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body,
    method,
  } = req;

  console.log('api/notes', method, body);

  try {
    if (!Array.isArray(sampleNotes)) {
      throw new Error('Cannot find user data');
    }

    switch (method) {
      case 'GET':
        // get all notes
        res.status(200).json(sampleNotes);
        break;
      case 'POST':
        // create note
        res.status(200).json({});
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }


  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;