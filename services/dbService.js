import FlightData from "../models/flightModel.js"


export const insertInDb=async(data)=>{
  try {
    await FlightData.deleteMany({});
    await FlightData.insertMany(data)
  } catch (error) {
    throw new Error(error);
  }
}

export const displayDataPerPage=async(page,perPage,filters)=>{
  try {
    // console.log(JSON.stringify(filters)) 
    return await FlightData.find(filters).skip((perPage * page) - perPage).limit(perPage)
  } catch (error) {
    throw new Error(error)
  }
}

export const countProduct=async(filters)=>{
  try {
    return await FlightData.count(filters)
  } catch (error) {
    throw new Error(error)
  }
}