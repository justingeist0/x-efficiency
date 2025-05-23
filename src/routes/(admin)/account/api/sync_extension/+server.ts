import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import { fetchSubscription, getOrCreateCustomerId, updateUserSubscription, isUserUpdatedWithinLast12Hours } from "../../subscription_helpers.server";

/** 
 * GET endpoint to sync extension authentication.
 * @param {RequestHandler} params - The request handler parameters including request, locals, and cookies.
 * @returns {Promise<Response>} - A JSON response with the access token or error.
 */
export async function GET({ request, locals }: RequestEvent) {
  const { supabaseServiceRole, safeGetSession } = locals;
  
  // Ensure user is authenticated
  const { session, user } = await safeGetSession();
  if (!session || !session.user || !user?.id) {
    return json({ success: false, loggedIn: false, message: "User not logged in" }, { status: 401 });
  }

  if (await isUserUpdatedWithinLast12Hours(user)) {
    return json(user)
  }


  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    return json({ success: false, loggedIn: true, message: "Error getting customer id." }, { status: 401 });
  }

  const {
    primarySubscription,
    hasEverHadSubscription,
    error: fetchErr,
  } = await fetchSubscription({
    customerId,
  })
  if (fetchErr) {
    return json({ success: false, loggedIn: true, message: "Error fetching subscription." }, { status: 401 });
  }


  // Update user's subscription status in profiles table
  const { error: updateError } = await updateUserSubscription({
    supabaseServiceRole,
    userId: user.id,
    plan: primarySubscription ? 'pro' : 'free',
    lastStripeSync: new Date()
  });

  if (updateError) {
    return json({ success: false, loggedIn: true, message: "Error updating user subscription." }, { status: 401 });
  }

  user.plan = primarySubscription ? 'pro' : 'free'
  user.last_stripe_sync = new Date()

  return json({
    user
  })
};
