module.exports = {
  getApi: async function (req, res) {
    console.log("hello");
    res.json({ hello: "hello" });
  },
};
