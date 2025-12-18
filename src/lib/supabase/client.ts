import {createClient} from "@supabase/supabase-js"
import { env } from "@lib/config/env"
import {auth} from "@clerk/nextjs/server";

export const createSupabaseClient =() =>{
    return createClient(
        env.NEXT_PUBLIC_SUPABASE_URL!,
        env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{
            async accessToken() {
                return ((await auth()).getToken())
            }
        }
    )
}
