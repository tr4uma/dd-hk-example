console.log(process.env.VUE_APP_HOSTNAME)
const casesUrl = process.env.VUE_APP_HOSTNAME ? `http://${process.env.VUE_APP_HOSTNAME}.herokuapp.com` : 'http://localhost:3000'

module.exports = {
  fetch: async (searchTerm) => {
    return (await fetch(`${casesUrl}/cases${searchTerm?'?search='+this.searchTerm:''}`, { method: 'GET' })).json();
  }
}
