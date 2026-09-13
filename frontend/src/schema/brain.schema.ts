import {z} from "zod";

export const createBrainSchema = z.object({
    title: z.string().trim().min(1, "Title is required").max(200, "Title must be at most 200 characters long"),
    body: z.string().trim().optional(),
    url: z.string().trim().url("Invalid URL").optional(),
    tags : z.array(z.string().trim().max(10, "you can add at most 10 tags")).optional().default([]),
})

export const updateBrainSchema = z.object({
    title: z.string().trim().min(1, "Title is required").max(200, "Title must be at most 200 characters long").optional(),
    body: z.string().trim().optional(), 
    url: z.string().trim().url("Invalid URL").optional(),
    tags : z.array(z.string().trim().max(10, "you can add at most 10 tags")).optional().default([]),
})
.refine(
    (data) =>
      data.title !== undefined ||
      data.body !== undefined ||
      data.url !== undefined ||
      data.tags !== undefined,
    {
      message: "At least one field must be provided for update",
    },
)


export type CreateBrainInput = z.infer<typeof createBrainSchema>
export type UpdateBrainInput = z.infer<typeof updateBrainSchema>