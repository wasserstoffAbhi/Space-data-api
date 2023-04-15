import mongoose from "mongoose";


const flightSchema=new mongoose.Schema({
  flight_number: {
    type: Number,
    required: true
  },
  mission_name: {
    type: String,
    required: true
  },
  mission_id: [String],
  upcoming: Boolean,
  launch_year: String,
  launch_date_unix: Number,
  launch_date_utc: Date,
  launch_date_local: Date,
  is_tentative: Boolean,
  tentative_max_precision: String,
  tbd: Boolean,
  launch_window: Number,
  rocket: {
    rocket_id: String,
    rocket_name: String,
    rocket_type: String,
    first_stage: {
      cores: [{
        core_serial: String,
        flight: Number,
        block: Number,
        gridfins: Boolean,
        legs: Boolean,
        reused: Boolean,
        land_success: Boolean,
        landing_intent: Boolean,
        landing_type: String,
        landing_vehicle: String
      }]
    },
    second_stage: {
      block: Number,
      payloads: [{
        payload_id: String,
        norad_id: [Number],
        reused: Boolean,
        customers: [String],
        nationality: String,
        manufacturer: String,
        payload_type: String,
        payload_mass_kg: Number,
        payload_mass_lbs: Number,
        orbit: String,
        orbit_params: {
          reference_system: String,
          regime: String,
          longitude: Number,
          semi_major_axis_km: Number,
          eccentricity: Number,
          periapsis_km: Number,
          apoapsis_km: Number,
          inclination_deg: Number,
          period_min: Number,
          lifespan_years: Number,
          epoch: Date,
          mean_motion: Number,
          raan: Number,
          arg_of_pericenter: Number,
          mean_anomaly: Number
        }
      }]
    },
    fairings: {
      reused: Boolean,
      recovery_attempt: Boolean,
      recovered: Boolean,
      ship: String
    }
  },
  ships: [String],
  telemetry: {
    flight_club: String
  },
  launch_site: {
    site_id: String,
    site_name: String,
    site_name_long: String
  },
  launch_success: String,
  launch_failure_details: {
    time: Number,
    altitude: Number,
    reason: String
  },
  links: {
    mission_patch: String,
    mission_patch_small: String,
    reddit_campaign: String,
    reddit_launch: String,
    reddit_recovery: String,
    reddit_media: String,
    presskit: String,
    article_link: String,
    wikipedia: String,
    video_link: String,
    youtube_id: String,
    flickr_images: [String]
  },
  details: String,
  static_fire_date_utc: Date,
  static_fire_date_unix: Number,
  timeline: {
    webcast_liftoff: Number
  },
  crew: [String]
},{
  timestamps:true
});

const FlightData = mongoose.model('FlightData', flightSchema);

export default FlightData;