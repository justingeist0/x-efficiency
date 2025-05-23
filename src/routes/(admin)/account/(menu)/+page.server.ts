import { redirect, error } from "@sveltejs/kit"
import {
  fetchSubscription,
  getOrCreateCustomerId,
} from "../subscription_helpers.server"
import type { PageServerLoad } from "./$types"

export const actions = {
  signout: async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()


    if (session) {
      await supabase.auth.signOut()
      redirect(303, "/")
    }
  },
}
