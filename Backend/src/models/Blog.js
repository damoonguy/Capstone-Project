const mongoose = require("mongoose");


const authorSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
)

const blogSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    author: {
      type: authorSchema,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    }
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Blog", blogSchema);