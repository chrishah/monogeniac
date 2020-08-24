<template>
<div>
  <div style="height: 500px; width: 100%">
    <l-map :zoom="zoom" :center="center" :options="mapOptions" style="height: 90%; z-index:9">
      <l-tile-layer :url="url" :attribution="attribution" />
      <template v-for="(location, index) in locations">
        <l-marker :ref="index" :key="index" :lat-lng="[location.lat, location.lng]">
          <l-icon>
            <b class="text-black">
              {{index}}
              <IconInfo class="h-8 w-auto text-black" />
            </b>
          </l-icon>
          <l-popup>
            <b>{{index}}</b>
            <br />
            {{location.text}}
          </l-popup>
        </l-marker>
      </template>
    </l-map>
  </div>
    <table class="table-auto">
      <!--<thead>
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Desc</th>
        </tr>
      </thead>-->
      <tbody>
        <tr v-for="(location, index) in locations" :key="index">
          <td class="px-4 py-2" v-on:click="highlight(index)"><b style="cursor:pointer;">{{index}}</b></td>
          <td class="px-4 py-2">{{location.text}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import locations from "~/assets/data/locations.json";

export default {
  data() {
    return {
      zoom: 5,
      center: [47.41322, -1.219482],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      locations: locations,
      mapOptions: {
        zoomSnap: 0.5,
      },
    };
  },

  methods: {
    highlight(id){
      this.$refs[id][0].mapObject.openPopup()
    },
  },

  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
  },
};
</script>
