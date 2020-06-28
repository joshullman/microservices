import { Listing } from "#root/db/models";
import { isError } from "util";

const setupRoutes = (app) => {
  app.get("/listings", async (req, res, next) => {
    try {
      const listings = await Listing.findAll();
      return res.json(listings);
    } catch (err) {
      return next(err);
    }
  });

  app.post("/listings", async (req, res, next) => {
    let { title, description } = req.body;
    if (!title || !description) {
      return next(new Error("Invalid body!"));
    }
    try {
      const listing = await Listing.create({ title, description });
      return res.json(listing);
    } catch (err) {
      next(err);
    }
  });
};

export default setupRoutes;
