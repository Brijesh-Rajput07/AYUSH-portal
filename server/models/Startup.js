const mongoose = require('mongoose');
// Define schema for Startup
const startupSchema = new mongoose.Schema({


  businessName: {
    type: String,
    required: true,
  },
  founders: [{
    name: String,
    email: String,
    // Add other founder information fields as needed
  }],
  contactInformation: {
    email: String,
    phone: String,
    address: String,
    // Add other contact information fields as needed
  },
  description: {
    type: String,
    required: true,
  },
  businessPlan: String,
  vision: String,
  progress: {
    type: String,
    enum: ['Idea', 'Prototype', 'Early Stage', 'Growth', 'Mature'],
  },
  fundingRequirements: {
    type: Number,
    default: 0,
  },
  // Add fields for permissions, such as connecting with others, accessing resources, etc.
  // Example:
  permissions: {

    canConnectIncubators: {
      type: Boolean,
      default: false,
    },
    canConnectMentors: {
      type: Boolean,
      default: false,
    },
    canAccessResources: {
      type: Boolean,
      default: false,
    },
    canConnectInvestors: Boolean,

  },
  createdDate: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Startup', startupSchema);