<template>
  <div>
    <a href="/events" class="nav">Events list</a>
    <router-view/>
  </div>
</template>
<script>
import Vue from 'vue';
import FlagIcon from 'vue-flag-icon';
Vue.use(FlagIcon);

export default {
  data() {
    return {
      results: [],
      flagNames: {
        AUS: 'au',
        CAN: 'ca',
        ENG: 'gb',
        WAL: 'wf',
        GRN: 'gd'
      }
    };
  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,500');
$primaryGray: #e4e4e4;
$hoverGray: #f5f5f5;
.nav {
  margin: 16px;
  font-family: 'Roboto';
  font-weight: 500;
}
.results {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px 0 16px;
  font-family: 'Roboto';
  font-weight: 300;
}
.results:not(.results-header):hover {
  background-color: $hoverGray;
}
.results-header {
  background-color: $primaryGray;
}
.results-header p {
  font-weight: 500;
}
.results-border {
  border-bottom: 1px solid $primaryGray;
}
.title {
  font-family: 'Roboto';
  font-weight: 500;
  margin: 32px 0 8px 16px;
}
.results p {
  margin: 8px 2px;
}
.rank {
  flex: 1;
}

.country {
  flex: 2;
}

.athlete {
  flex: 2;
}

.time {
  flex: 2;
}

.points {
  flex: 1;
}
</style>
