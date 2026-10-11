import { getStore } from "@netlify/blobs";
import { handle } from "../lib/core.mjs";

export default async (req) => {
  const store = getStore({ name: "waste", consistency: "strong" });
  return handle(req, store, { ADMIN_PASSWORD: Netlify.env.get("ADMIN_PASSWORD") });
};

export const config = { path: ["/api/items", "/api/logs", "/api/admin/check"] };
