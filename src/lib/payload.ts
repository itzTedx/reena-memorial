import config from "@payload-config";
import { getPayload } from "payload";

export const payload = await getPayload({ config });

export async function getGallery() {
  try {
    const result = await payload.find({
      collection: "gallery",
      sort: "-createdAt",
      limit: 1000,
    });

    return result.docs;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}
