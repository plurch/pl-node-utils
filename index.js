
// To have a fetch Response reject on error
function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

// Delay for a number of milliseconds
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Return a timestamp like "2020-04-08T11_45_35_407Z"
function getTimeStamp() {
  return (new Date()).toISOString().replace(/(:|\.)/g, '_');
}

// Get hours, minutes, seconds from milliseconds input
function getHMS(ms) {
  let seconds = ms / 1000;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  return {hours, minutes, seconds};
}

module.exports = {
  checkStatus,
  delay,
  getTimeStamp,
  getHMS
};
