import { getNewBlogs, getNewPictures } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const PostData = () =>
  useQuery({
    queryKey: ["post"],
    queryFn: getNewBlogs,
  });

export const getPictures = () =>
  useQuery({
    queryKey: ["pictures"],
    queryFn: getNewPictures,
  });
