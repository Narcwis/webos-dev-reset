(async () => {
  const axios = require("axios");
  const token = process.env.LG_TOKEN;
  console.log(`token: ${token}`)
  const checkTimeLeftLink = "https://developer.lge.com/secure/CheckDevModeSession.dev?sessionToken=";

  const resetTimeLink = "https://developer.lge.com/secure/ResetDevModeSession.dev?sessionToken=";

  const checkResult = await axios.get(checkTimeLeftLink + token);
  console.log(checkResult.data);

  const resetResult = await axios.get(resetTimeLink + token);
  console.log(resetResult.data);

  const newCheckResult = await axios.get(checkTimeLeftLink + token);
  console.log(newCheckResult.data);
})();
