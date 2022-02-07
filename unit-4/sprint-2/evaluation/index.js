var express = require("express");
var mongoose = require("mongoose");

var app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/evaluation");
};

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: false, default: "Female" },
    type: { type: String, required: false, default: "customer" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

const branchSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      address: { type: String, required: true },
      micr: { type: Number, required: true },
      ifsc: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Branch = mongoose.model("branch", branchSchema);

  const MasterSchema = new mongoose.Schema(
    {
      Balance: { type: Number, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Master = mongoose.model("master", MasterSchema);

  const savingSchema = new mongoose.Schema(
    {
      acount_number: { type: Number, required: true, unique:true},
      balance: { type: Number, required: true },
      interest_rate: { type: Number, required: true }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Saving = mongoose.model("saving", savingSchema);

  const fixedSchema = new mongoose.Schema(
    {
      acount_number: { type: Number, required: true, unique:true},
      balance: { type: Number, required: true },
      interest_rate: { type: Number, required: true },
      start_date: { type: Date, required: true },
      maturity_date: { type: Date, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Fixed = mongoose.model("fixed", fixedSchema);


  app.listen(2468, async function(){
      try {
          await connect();
          console.log("running");
      } catch (e) {
          console.log("error is", e.message);
      }
  })