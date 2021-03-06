import { Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  senha: string;
  state: string;
  occupation: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: Schema.Types.String,
    },
    email: {
      type: Schema.Types.String,
    },
    senha: {
      type: Schema.Types.String,
    },
    state: {
      type: Schema.Types.String,
    },
    occupation: {
      type: Schema.Types.String,
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
