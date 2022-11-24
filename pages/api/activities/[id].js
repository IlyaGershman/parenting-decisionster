import dbConnect from "../../../lib/dbConnect";
import Activity from "../../../models/Activity";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const activity = await Activity.findById(id);
        if (!activity) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: activity });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        console.log(req.body);
        const activity = await Activity.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!activity) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: activity });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedActivity = await Activity.deleteOne({ _id: id });
        if (!deletedActivity) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
