
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

module.exports = {
  checkStatus,
  delay
};
