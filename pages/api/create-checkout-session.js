const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method == "POST") {
    const { image, title, description, price } = req.body;
    const transformedItems = [
      {
        description: description,
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: price + 10,
          product_data: {
            name: title,
            images: [image],
          },
        },
      },
    ];

    const session = await stripe.checkout.sessions
      .create({
        payment_method_types: ["card"],
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}`,
      })
      .catch((err) => res.status(500).json({ error: err.message }));
    res.status(200).json({ id: session.id });
  }
};
