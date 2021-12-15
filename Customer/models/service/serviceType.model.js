const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ServiceTypeSchema = new Schema(
  {
    nameOfServiceType: { type: Schema.Types.String },
    services: [{ type: Schema.Types.ObjectId }],
  },
  {
    collection: "ServiceType",
  }
);
const ServiceType = mongoose.model("ServiceType", ServiceTypeSchema);
module.exports = ServiceType;
