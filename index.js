(async () => {
  require("dotenv").config();
  const axios = require("axios");
  console.log(process.env);
  const token = process.env.LG_TOKEN;
  if (!token) throw new Error("No token provided");
  console.log(`token: ${token}`);
  const checkTimeLeftLink = "https://developer.lge.com/secure/CheckDevModeSession.dev?sessionToken=";

  const resetTimeLink = "https://developer.lge.com/secure/ResetDevModeSession.dev?sessionToken=";

  const checkResult = await axios.get(checkTimeLeftLink + token);
  console.log(checkResult.data);
  if (checkResult.data.result === "fail") {
    throw new Error(checkTimeLeftLink.data.message);
  }

  const resetResult = await axios.get(resetTimeLink + token);
  console.log(resetResult.data);
  if (resetResult.data.result === "fail") {
    throw new Error(resetResult.data.message);
  }

  const newCheckResult = await axios.get(checkTimeLeftLink + token);
  console.log(newCheckResult.data);
  if (newCheckResult.data.result === "fail") {
    throw new Error(newCheckResult.data.message);
  }
})();
