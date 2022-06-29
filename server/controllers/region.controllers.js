import { Region } from "../models/region/region.model.js";

// export const getRegion = async (req, res) => {
//   const { regionName } = req.body;
//   try {
//     const region = await Region.findOne({ regionName });
//     if (!region) throw new Error();
//     res.status(200).send(region);
//   } catch (error) {
//     res.status(404).send("Not found");
//   }
// };

export const getAllRegions = async (req, res) => {
  try {
    const regions = await Region.find();
    if (!regions) throw new Error();
    res.status(200).send(regions);
  } catch (error) {
    res.status(404).send("Not found");
  }
};
