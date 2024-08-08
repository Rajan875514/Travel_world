import Tour from '../models/Tour.js';

export const createTour = async (req, res) => {
  const tour = new Tour({
    title: req.body.title,
    city: req.body.city,
    address: req.body.address,
    distance: req.body.distance,
    photo: req.body.photo,
    desc: req.body.desc,
    price: req.body.price,
    maxGroupSize: req.body.maxGroupSize,
    reviews: req.body.reviews,
    featured: req.body.featured,
  });

  try {
    const newTour = await tour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
