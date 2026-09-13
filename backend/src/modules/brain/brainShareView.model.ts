import mongoose from "mongoose";

const brainShareViewSchema = new mongoose.Schema({
    
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    viewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true},
);

brainShareViewSchema.index( { owner: 1, viewer: 1 }, { unique: true });

const BrainShareView = mongoose.model("BrainShareView",brainShareViewSchema,);

export default BrainShareView;