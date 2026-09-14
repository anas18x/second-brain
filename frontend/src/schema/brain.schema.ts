import { z } from "zod"


export const createBrainSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200, "Title must be at most 200 characters long"),
  body: z.string().trim().optional(),
  url: z.url().optional(),
  tags: z.array(z.string().trim()).max(10).optional().default([]),
})

export const updateBrainSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200, "Title must be at most 200 characters long").optional(),
  body: z.string().trim().optional(),
  url: z
    .string()
    .trim()
    .refine(
      (val) => val === "" || z.url().safeParse(val).success,
      "Invalid URL",
    ).optional(),
  tags: z.array(z.string().trim()).max(10).optional(),
  
}).refine(
  (data) =>
    data.title !== undefined ||
    data.body !== undefined ||
    data.url !== undefined ||
    data.tags !== undefined,
  {
    message: "At least one field must be provided for update",
  },
)


export const getBrainsQuerySchema = z.object({
  search: z.string().trim().optional(),
  tags: z.string().trim().optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
})


export type CreateBrainInput = z.infer<typeof createBrainSchema>

export type UpdateBrainInput = z.infer<typeof updateBrainSchema>

export type GetBrainsQueryInput = z.infer<typeof getBrainsQuerySchema>