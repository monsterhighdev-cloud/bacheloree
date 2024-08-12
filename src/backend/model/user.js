import { Schema, model, models } from "mongoose";

const userSchema = Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
