const app = require("./config/server");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ API Running on port ${port}`);
});
