import config from "@payload-config";
import { getPayload } from "payload";

export async function getGalleryImages() {
  try {
    const payload = await getPayload({ config });

    const result = await payload.find({
      collection: "gallery",
      sort: "-createdAt",
      limit: 100,
    });

    return result.docs;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}
