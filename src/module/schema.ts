import type { paths } from "@/schema";

export type ProductSchema =
  paths["/products/{slug}"]["get"]["responses"]["200"]["content"]["application/json"];

export type ProductsSchema =
  paths["/products"]["get"]["responses"]["200"]["content"]["application/json"];
