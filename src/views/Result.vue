<template>
  <div id="app">
    <h1 class="title">{{ title }}</h1>
    <div v-if="results">
      <div class="results results-header">
        <div class="rank">
          <p>Rank</p>
        </div>
        <div class="country">
          <p>Country</p>
        </div>
        <div class="athlete">
          <p>Athlete</p>
        </div>
        <div class="time">
          <p>{{ resultType }}</p>
        </div>
        <div class="points">
          <p>Points</p>
        </div>
      </div>
      <div class="results results-border" v-for="result in results" :key="result.rank">
        <div class="rank">
          <p>{{ result.Rank }}</p>
        </div>
        <div class="country">
          <flag :iso="result.flag"/>
          <span>{{` ${result.Country}` }}</span>
        </div>
        <div class="athlete">
          <p>{{ result.Athlete }}</p>
        </div>
        <div class="time" v-if="resultType === 'Time'">
          <p>{{ result.Time }}</p>
        </div>
        <div class="time" v-else>
          <p>{{ result.Result }}</p>
        </div>
        <div class="points">
          <p>{{ result.Points }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>No data</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: {},
      resultType: 'Time',
      eventID: '1',
      events: {},
      title: ''
    };
  },
  methods: {
    async getResults() {
      try {
        let response = await fetch('../results.json');
        return Promise.resolve(response.json());
      } catch (e) {
        console.log('error');
      }
    },
    async getEvents() {
      let response = await fetch('../events.json');
      await response.json().then(data => (this.events = data.events));
    },
    setTitle() {
      let event = this.events.filter(value => {
        return value.id === this.$route.params.resultID;
      });
      this.title = event[0].name;
    }
  },
  mounted: function() {
    this.getResults().then(result => {
      try {
        let filtered = result.results.filter(value => {
          return this.$route.params.resultID === value.event_id;
        });
        this.resultType = Object.keys(filtered[0].results[0])[3];
        this.results = filtered[0].results;
      } catch (e) {
        console.log('Error: no data');
        this.results = null;
      }
    });
    this.getEvents().then(() => {
      this.setTitle();
    });
  }
};
</script>
<style>
h2 {
  font-family: 'Roboto';
  font-weight: 300;
  margin-left: 16px;
}
</style>
