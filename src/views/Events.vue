<template>
  <div>
    <h1 class="title">Events</h1>
    <div class="results results-header">
      <div>
        <p>Name</p>
      </div>
    </div>

    <div
      class="results results-border"
      v-for="event in events"
      :key="event.id"
      @click="goToEvent(event.id)"
    >
      <div>
        <p>{{ event.name }}</p>
      </div>
    </div>
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
    },
    goToEvent(id) {
      window.location.href = '/result/' + id;
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