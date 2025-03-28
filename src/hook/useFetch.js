// Developer: Justine M. Hilario

import { useState, useEffect } from 'react';
import { useAxios } from '../api/axios.js';
import { STRING } from "../constants/string.js";

// Custom hook to fetch address data
export const useFetch = {
  useFetchData: () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // Start loading state
        try {
          // Fetch data using the custom Axios hook
          const res = await useAxios.connect({
            method: STRING.axiosGet,
            type: 'application/json',
            url: `${process.env.PUBLIC_URL}/mock/data.json`,
          });

          // Log response data for debugging
          console.log('Fetched data:', res.data);

          // Destructure data fields with default to empty array if undefined
          const {
            overviewData = [],
            technologiesData = [],
            projectsData = [],
            careerData = [],
            footerData = [],
          } = res.data || {};

          // Set the fetched data
          setData({ overviewData, technologiesData, projectsData, careerData, footerData });
        } catch (err) {
          // Log error details
          console.error('Error fetching data:', err);
          setError(err); // Set error state
        } finally {
          setLoading(false); // End loading state
        }
      };

      fetchData(); // Invoke fetch data
    }, []); // Empty dependency array to run effect once

    // Return fetched data, loading status, and error
    return { data, loading, error };
  },
};
