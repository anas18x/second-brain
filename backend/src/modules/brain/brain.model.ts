import mongoose from "mongoose";

const brainSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    body: {
      type: String,
      trim: true,
    },

    url: {
      type: String,
      trim: true,
    },

    tags: {
      type: [
        {
          type: String,
          trim: true,
          lowercase: true,
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

brainSchema.index({
  owner: 1,
});

brainSchema.index({
  owner: 1,
  tags: 1,
});

const Brain = mongoose.model("Brain", brainSchema);
export default Brain;
