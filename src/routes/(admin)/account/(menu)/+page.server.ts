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

export const load: PageServerLoad = async ({
  locals: { safeGetSession, supabaseServiceRole },
}) => {
  const { session, user } = await safeGetSession()
  if (!session || !user?.id) {
    redirect(303, "/login")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    console.error("Error creating customer id", idError)
    error(500, {
      message: "Error creating customer ID. If issue persists, please contact us. ",
    })
  }

  const {
    primarySubscription,
    hasEverHadSubscription,
    error: fetchErr,
  } = await fetchSubscription({
    customerId,
  })
  if (fetchErr) {
    console.error("Error fetching subscription", fetchErr)
    error(500, {
      message: "Unknown fetching subscription. If issue persists, please contact us.",
    })
  }

  return {
    isActiveCustomer: !!primarySubscription,
    hasEverHadSubscription,
    currentPlanId: primarySubscription?.appSubscription?.id,
  }
}
