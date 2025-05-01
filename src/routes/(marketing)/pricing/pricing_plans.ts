export const defaultPlanId = "free"

export const pricingPlans = [
  // {
  //   id: "free",
  //   name: "Demo (Free)",
  //   description: "Test the tool out with rate limits meaning the automations run a lot slower and limits on core functionality.",
  //   price: "$0",
  //   priceIntervalName: "per month",
  //   stripe_price_id: null,
  //   features: ["Demo access to software", "No credit card required"],
  // },
  {
    id: "pro",
    name: "Pro",
    description:
      "Full access to X Efficiency. More engagement, more leads, in less time. Bulk DMs, profile finder, and more.",
    price: "$50",
    priceIntervalName: "per month",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    features: [
      "Unlimited DMs",
      "Find unlimited profiles",
      "1 on 1 Strategy Chat via DM",
    ],
  },
  {
    id: "enterprise",
    name: "Hands-Free",
    description:
      "We do all your DMs and engage your target audience in your writing style to drive sales on autopilot.",
    price: "$997",
    priceIntervalName: "per month",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "We create your strategy",
      "We reply to your DMs",
      "We send 100 DMs + 50 replies daily",
      "+ 1 year access to the Pro plan.",
    ],
  },
  {
    id: "dfy",
    name: "Fully Managed",
    description:
      "We create content and fully run your lead generation + nurturing machine so you never need to go on X.",
    price: "$4997",
    priceIntervalName: "per month",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "We put your brain in an AI",
      "We write 2 posts per day",
      "+ Everything in Hands-Free",
    ],
  },
]
