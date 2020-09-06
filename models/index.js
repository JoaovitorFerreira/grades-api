import mongoose from "mongoose";
import gradesModel from "./gradeModels.js";

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.gradesModel = gradesModel(mongoose);

export { db };
