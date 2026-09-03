import { jwtPayload } from "../../utils/common/tokens.js";
import { GetBrainsQueryInput } from "../modules/brain/brain.schema.js";


// telling TypeScript : Express Request ALSO has a user property.

declare global {
    namespace Express {
        interface Request {
            // combine JwtPayload with custom fields
            user ?: jwtPayload & {
                userId : string
            }

            validatedQuery ?: GetBrainsQueryInput
        }
    }
}

export {}
