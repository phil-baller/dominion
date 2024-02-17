import { getNewBlogs, getNewPictures } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const PostData = () =>
  useQuery({
    queryKey: ["post"],
    queryFn: getNewBlogs,
  });

export const PicturesData = () =>
  useQuery({
    queryKey: ["pictures"],
    queryFn: getNewPictures,
  });
