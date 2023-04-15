import axios from "axios"
import { countProduct, displayDataPerPage, insertInDb } from "../services/dbService.js";


const fetchData=async()=>{
  const data=await axios.get("https://api.spacexdata.com/v3/launches");
  await insertInDb(data.data)
}

export const displayData = async(req,res) => {
  let perPage=15;
  const page=req.query.p ?? 1;
  const filters=req.query.f ? JSON.parse(req.query.f) : {};
  if(!req.query.p)await fetchData();//only fetches data if page is not present in Query
  const data=await displayDataPerPage(page,perPage,filters);
  const totalProductCount=await countProduct(filters)
  console.log(totalProductCount)
  return res.status(200).send({title:"home",launchData:data,current:page,pages: Math.ceil(totalProductCount / perPage)})
}

export const getData=async(req,res)=>{
  res.render("home",{title:"home"})
}
