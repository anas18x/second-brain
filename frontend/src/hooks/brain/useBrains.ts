import {useQuery} from "@tanstack/react-query"
import { getBrains } from "@/services/brain/brain.api"
import type { GetBrainsQueryInput } from "@/schema/brain.schema"


export const useBrains = (params : GetBrainsQueryInput) => {
    return useQuery({
        // using params as part of the query key to ensure that the query is refetched when params change and if the query key is the same, react-query will return the cached data instead of refetching it
        queryKey : ["brains", params],
        queryFn:() => getBrains(params),
        staleTime: 5 * 60 * 1000,
        // A 5-minute freshness window avoids unnecessary requests when users navigate around the dashboard.
    })
}

