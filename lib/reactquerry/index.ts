import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const PostData = () => useQuery({
    queryKey: ["post"],
    queryFn: async () => {
        const { data } = await axios.get("/api/blog");

        return data;
    },
});