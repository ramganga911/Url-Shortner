const generateShortId = require("ssid");
const URL = require("../models/url");

async function handlegenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is reuired" });
  const shortID = generateShortId(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
    createdBy: req.user._id,
  });
  return res.render('home', {
    id: shortID,
  });
  return res.json({ id: shortID });
}


// async function handleOutputLink(req, res) {
//     const shortId = req.params.shortId;
//     const entry = await URL.findOneAndUpdate(
//     {
//       shortId,
//     },
//     {
//       $push: {
//         visitHistory: { timestamp: Date.now() },
//       },
//     }
//   );
//   return res.redirect(entry.redirectURL);
// }

async function handlegetanalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visithistory.length,
    analytics: result.visithistory,
  });
}


module.exports = {
  handlegenerateNewShortURL,
  handlegetanalytics,
  // handleOutputLink,
};
