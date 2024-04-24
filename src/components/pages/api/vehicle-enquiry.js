// pages/api/vehicle-enquiry.js

import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.post(
      'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
      req.body,
      {
        headers: {
          'x-api-key': 'rubhdsUsqs7817KkODFnC8xOjazulvao3CgPnXt8', // Replace with your actual API key
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
};
