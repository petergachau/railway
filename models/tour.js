import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  apartment: {type:String},
  name:{type:String},
  houseNo:{type:String},
  amount: {type:Number},
  idNo: {type:Number},
  payment:{type:Number},
  currentRead:{type:Number},
  lastRead:{type:Number},
  deposit:{type:Number},
  cf:{type:Number},
  waterFee:{type:Number},
  datePaid:{type:String},
  phone:{type:String},
  imageFile:{type:String},
  aptType:{type:String},
  arrears:{type:Number},
  wifi:{type:Number},
  penalties:{type:Number},
  balance:{type:Number},
  creator: String,
  status:{
    type:String,
  enum:['pending','success', 'rejected'],
     default:'pending'
  },
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
},
{timestamps:true});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
