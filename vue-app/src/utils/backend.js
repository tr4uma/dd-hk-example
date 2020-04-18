console.log(process.env.VUE_APP_HOSTNAME)
const casesUrl = process.env.NODE_ENV === 'production' ? `https://${process.env.VUE_APP_HOSTNAME}.herokuapp.com` : 'http://localhost:3000'

module.exports = {
  fetch: async (searchTerm) => {
    return (await fetch(`${casesUrl}/cases${searchTerm?'?search='+this.searchTerm:''}`, { method: 'GET' })).json();
  }
}
