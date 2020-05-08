module.exports = {
  getApi: async function (req, res) {
    try {
      res.json({ hello: "hello" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.code });
    }
  },
};
