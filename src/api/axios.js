import axios from "axios";

export const useAxios = {
    connect: async ({ method, type, url, data }) => {
        return await axios({
            method: method,
            url: url,
            headers: {
                "Content-Type": type
            },
            withCredentials: true, // This allows cookies to be sent and received.
            timeout: 10000,
            data: data ? data : undefined
        });
    },
};
