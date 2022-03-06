const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notes", schema);
