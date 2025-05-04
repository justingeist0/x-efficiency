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
    price: "$49",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RKOk2Alo9KCTI03xlNFzlxL",
    stripe_product_id: "prod_SEsVjw967NFxfI",
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
      "We handle all your DMs to drive sales and account growth on autopilot. You do the rest.",
    price: "$997",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RKOmtAlo9KCTI0384ZeVQsq",
    stripe_product_id: "prod_SEsXQD8k2wy45O",
    features: [
      "We reply to your DMs.",
      "We send 100 DMs daily.",
      "+ 1 year access to the Pro plan.",
    ],
  },
  {
    id: "dfy",
    name: "Fully Managed",
    description:
      "We manage the content and run your lead generation + nurturing machine so you never need to go on X.",
    price: "$2997",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RKOnaAlo9KCTI03fOZcXcD4",
    stripe_product_id: "prod_SEsYMP5shG0KEX",
    features: [
      "We do 50 replies per day.",
      "We post 2 time daily.",
      "+ Everything in Hands-Free.",
    ],
  },
]
