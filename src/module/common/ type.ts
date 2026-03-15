import type { paths } from "@/schema";

export type SuccessResponse = paths["/products"]["get"]["responses"][200]["content"]{"application/json"}