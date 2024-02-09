import { createClient } from "next-sanity";

const config = {
  projectId: "i0pky6z4",
  dataset: "production",
  apiVersion: "2024-02-04",
};

export const client = createClient({ ...config, useCdn: false });
