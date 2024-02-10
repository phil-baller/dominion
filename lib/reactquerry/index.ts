import { getNewBlogs } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const PostData = () =>
  useQuery({
    queryKey: ["post"],
    queryFn: getNewBlogs,
  });
