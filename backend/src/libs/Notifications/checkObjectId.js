import mongoose from "mongoose";

export default (id) => new mongoose.Types.ObjectId(id);