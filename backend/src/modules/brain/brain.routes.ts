import {Router} from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { validate, validateQuery , validateParams} from "../../middleware/validate.middleware.js";
import { createBrainSchema , getBrainsQuerySchema, brainIdParamsSchema, updateBrainSchema, shareSlugParamsSchema} from "./brain.schema.js";
import { createBrainController , getBrainController, getBrainByIdController, updateBrainController, deleteBrainController, getTagsController , enableBrainSharingController, getPublicBrainController, disableBrainSharingController, getBrainShareViewsController} from "./brain.controller.js";
import { catchAsyncError } from "../../middleware/catchAsyncError.js";



const router = Router()

// Static routes first
router.post("/",
    authMiddleware, 
    validate(createBrainSchema), 
    catchAsyncError(createBrainController)
)

 
router.get("/",
    authMiddleware, 
    validateQuery(getBrainsQuerySchema),
    catchAsyncError(getBrainController)
)    


router.get("/tags",
    authMiddleware, 
    catchAsyncError(getTagsController)
)


router.post("/share",
    authMiddleware,
    catchAsyncError(enableBrainSharingController)
)


router.patch("/share",
    authMiddleware,
    catchAsyncError(disableBrainSharingController)
)


router.get("/share/views",
    authMiddleware,
    catchAsyncError(getBrainShareViewsController)
)


router.get("/share/:shareSlug",
    authMiddleware,
    validateParams(shareSlugParamsSchema),
    catchAsyncError(getPublicBrainController)
)



//  Dynamic routes last
router.get("/:id",
    authMiddleware, 
    validateParams(brainIdParamsSchema),
    catchAsyncError(getBrainByIdController)
)


router.patch("/:id",
    authMiddleware, 
    validateParams(brainIdParamsSchema),
    validate(updateBrainSchema), 
    catchAsyncError(updateBrainController)
)


router.delete("/:id",
  authMiddleware,
  validateParams(brainIdParamsSchema),
  catchAsyncError(deleteBrainController)
);


export default router;