import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  title: {
    type: String, // Assuming title should be a string
    required: true,
  },
  city: {
    type: String, // Assuming city should be a string
    required: true,
  },
  address: {
    type: String, // Assuming address should be a string
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  photo: {
    type: String, // Assuming photo should be a URL or path, so string type
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxGroupSize: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  featured: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model("Tour", tourSchema);
