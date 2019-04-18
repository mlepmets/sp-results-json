<template>
  <div>
    <h1 class="title">Events</h1>
    <div class="results results-header">
      <div>
        <p>Name</p>
      </div>
    </div>

    <router-link
      class="event-link"
      :to="{ name: 'result-page', params: { resultID: event.id } }"
      v-for="event in events"
      :key="event.id"
    >
      <div class="results results-border">
        <div>
          <p>{{ event.name }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [{ id: 1, name: 'ketta' }]
    };
  },
  methods: {
    async getJSON() {
      let response = await fetch('./events.json');
      await response.json().then(data => (this.events = data.events));
    }
  },
  mounted: function() {
    this.getJSON();
  }
};
</script>
<style scoped lang="scss">
.name {
  margin: 8px 16px;
  font-family: 'Roboto';
}
.results {
  cursor: pointer;
}
</style>