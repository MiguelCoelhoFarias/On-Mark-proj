import mongoose from "mongoose";
import brcypt from "bcryptjs";

// criando um usuario:
// autenticacao se e um admin ou usuario do sistema(cliete)

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await brcypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
