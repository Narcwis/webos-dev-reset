(async () => {
  const axios = require("axios");
  const checkTimeLeftLink = "https://developer.lge.com/secure/CheckDevModeSession.dev?sessionToken=";

  const resetTimeLink = "https://developer.lge.com/secure/ResetDevModeSession.dev?sessionToken=";

  const checkResult = await axios.get(checkTimeLeftLink + process.env.LG_TOKEN);
  console.log(checkResult.data);

  const resetResult = await axios.get(resetTimeLink + process.env.LG_TOKEN);
  console.log(resetResult.data);

  const newCheckResult = await axios.get(checkTimeLeftLink + process.env.LG_TOKEN);
  console.log(newCheckResult.data);
})();
