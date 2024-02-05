import ImageBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = ImageBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
