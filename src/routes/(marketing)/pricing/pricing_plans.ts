export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "Find profiles and send DMs faster.",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["Send unlimited DMs.", "Find unlimited profiles.", "Collect warm leads.", "No credit card required."],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "Get full access to the entire DM Dad toolkit.",
    price: "$49",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RKOk2Alo9KCTI03xlNFzlxL",
    stripe_product_id: "prod_SEsVjw967NFxfI",
    features: [
      "Full access to premium features.",
      "More control over the DMs.",
      "Find new profiles faster.",
    ],
  },
  // {
  //   id: "enterprise",
  //   name: "Fully Managed",
  //   description:
  //     "Let us run your daily outbound and everything else for you on X. 100 hand-crafted DMs sent every day, replies managed, and your inbox stays warm.",
  //   price: "$997+",
  //   priceIntervalName: "per month",
  //   stripe_price_id: "price_1RKOmtAlo9KCTI0384ZeVQsq",
  //   stripe_product_id: "prod_SEsXQD8k2wy45O",
  //   features: [
  //     "100 Outbound DMs Sent Daily",
  //     "All DMs Answered by Our Team",
  //     "* Contact us to book call."
  //   ],
  // },
  // {
  //   id: "dfy",
  //   name: "Fully Managed",
  //   description:
  //     "We manage the content and run your lead generation + nurturing machine so you never need to go on X.",
  //   price: "$2997",
  //   priceIntervalName: "per month",
  //   stripe_price_id: "price_1RKOnaAlo9KCTI03fOZcXcD4",
  //   stripe_product_id: "prod_SEsYMP5shG0KEX",
  //   features: [
  //     "We do 50 replies per day.",
  //     "We post 2 time daily.",
  //     "+ Everything in Hands-Free.",
  //   ],
  // },
]
