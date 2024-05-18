pages/api/vehicle-enquiry.js

import axios from 'axios';

export default async (req, res) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const response = await axios.post(
      apiEndpoint,
      req.body,
      {
        headers: {
          'x-api-key': apiKey , // Replace with your actual API key
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
};
pages/api/vehicle-enquiry.js
