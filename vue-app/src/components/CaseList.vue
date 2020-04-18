<template>
  <div class="container">
    <div class="filter">
      <input type="text" class="searchterm" v-model="searchTerm"/>
      <button v-on:click="fetchCases">Search</button>
    </div>
    <div class="result">
      <table v-if="caseList.length > 0" class="res">
        <thead>
          <tr>
            <th v-for="field in Object.keys(this.caseList[0])" v-bind:key="field">{{field}}</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="row in this.caseList" v-bind:key="row.id">
              <th v-for="field in Object.keys(row)" v-bind:key="row.id + field">{{row[field]}}</th>
            </tr>
        </tbody>
      </table>
      <span v-else>
        Please press the 'Search' button
      </span>
    </div>
  </div>
</template>

<script>
const fetch = require("node-fetch");

const casesUrl = process.env.HEROKU_APP_NAME ? `http://${process.env.HEROKU_APP_NAME}.herokuapp.com` : 'http://localhost:3000'

export default {
  name: "CaseList",
  data: () => {
    return {
      searchTerm: undefined,
      caseList: []
    };
  },
  methods: {
    fetchCases: async function() {
      const res = await (await fetch(`${casesUrl}/cases${this.searchTerm?'?search='+this.searchTerm:''}`, { method: 'GET' })).json();
      console.log(res)
      this.caseList = res
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.filter {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.result {
  overflow-y: scroll;
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: flex-start;
}

.res {
  border: 1px solid black;
}

</style>
