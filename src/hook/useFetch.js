import { useState, useEffect } from 'react';
import { useAxios } from '../api/axios.js';
import { STRING } from "../constants/string.js";

export const useFetch = {

    // Custom hook to fetch address data
    useFetchData: () => {
        const [data, setData] = useState({});
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await useAxios.connect({
                        method: STRING.axiosGet,
                        type: 'application/json',
                        url: `${process.env.PUBLIC_URL}/mock/data.json`,
                    });

                    // Ensure the necessary data fields exist in the response
                    if (res.data) {
                        const {
                            overviewData,
                            technologiesData,
                            projectsData,
                            careerData,
                            footerData,
                        } = res.data;

                        // Set the data if all sections are available
                        setData({
                            overviewData: overviewData || [],
                            technologiesData: technologiesData || [],
                            projectsData: projectsData || [],
                            careerData: careerData || [],
                            footerData: footerData || [],
                        });
                    }
                } catch (err) {
                    console.error('Error fetching data:', err);
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, []);

        return { data, loading, error };
    },
};
