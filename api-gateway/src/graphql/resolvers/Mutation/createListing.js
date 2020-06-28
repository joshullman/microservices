import ListingsService from "#root/adapters/ListingsService";

const createListingResolver = async (obj, { title, description }, context) => {
  if (!context.res.locals.userSession) throw new Error("Not logged in");
  return await ListingsService.createListing({ title, description });
};

export default createListingResolver;
