<template>
  <div>
    <boxHeaders></boxHeaders>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="3"
        >
          <h3 class="text-center">Lịch</h3>
          <v-date-picker
            type="month"
            full-width
          ></v-date-picker>
        </v-col>
        <v-col
          cols="12"
          sm="3"
        >
          <h2 class="text-center">Thời tiết</h2>
          <v-card
            max-width="400"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 text-center">
                  Hà Nội
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list class="transparent">
              <v-list-item
                v-for="item of forecast"
                :key="item.day"
              >
                <v-list-item-title>{{ item[0].dayofweek }}</v-list-item-title>
                <v-list-item-title>{{item[0].status}}</v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item[0].day }}&deg;C/{{item[0].night}} &deg;C
                  <v-icon>mdi-thermometer</v-icon>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <!-- covid -->
        <v-col
          cols="12"
          sm="6"
        >
          <h2 class="text-center">Covid</h2>
          <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
        </v-col>
      </v-row>
      <div class="indigo">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2 white--text">
            Tin tức
          </h1>
        </v-card-title>
        <v-tabs
          v-model="tab"
          background-color="light-blue lighten-3"
          color="light-blue lighten-5"
          centered
          show-arrows
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item"
          >
            <v-card
              max-width="100%"
              class="px-5 py-5 mb-3"
            >
                <v-row>
                  <v-col
                  cols="12"
                  sm="2"
                  class="p-0"
                  >
                  <v-img
                    max-height="168px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-E-u70flJEARwkG4hma852N5-0tnA7ofaA&usqp=CAU">
                  </v-img>
                  </v-col>
                  <v-col
                  cols="12"
                  sm="10"
                  >
                  <h3 class="post_title">{{text}}</h3>
                  <p>{{content}}</p>
                  </v-col>
                </v-row>
            </v-card>
            <v-card
              max-width="100%"
              class="px-5 py-5 mb-3"
            >
                <v-row>
                  <v-col
                  cols="12"
                  sm="2"
                  class="p-0"
                  >
                  <v-img
                    max-height="168px"
                    src="https://res.klook.com/image/upload/c_fill,w_750,h_500,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ys5jqwvg6pgtpacb5kqb.jpg">
                  </v-img>
                  </v-col>
                  <v-col
                  cols="12"
                  sm="10"
                  >
                  <h3 class="post_title">{{text}}</h3>
                  <p>{{content}}</p>
                  </v-col>
                </v-row>
            </v-card>
            <v-card
              max-width="100%"
              class="px-5 py-5 mb-3"
            >
                <v-row>
                  <v-col
                  cols="12"
                  sm="2"
                  class="p-0"
                  >
                  <v-img
                    max-height="168px"
                    src="https://image.shutterstock.com/image-vector/creative-modern-img-letter-logo-260nw-1780496255.jpg">
                  </v-img>
                  </v-col>
                  <v-col
                  cols="12"
                  sm="10"
                  >
                  <h3 class="post_title">{{text}}</h3>
                  <p>{{content}}</p>
                  </v-col>
                </v-row>
            </v-card>
            <div class="text-center">
              <v-pagination
                :length="4"
                circle
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-container>
    <boxFooters></boxFooters>
  </div>
</template>
<script>
import boxHeaders from './layout/boxHeader'
import boxFooters from './layout/boxFooter'
import axios from "axios"
import vietnam from '../js/vietnam.json'

var dayjs = require('dayjs')
export default {
  name: 'homepage',
  components: {
    boxHeaders,
    boxFooters
  },
  data () {
      return {
        forecast: null,
        chartOptions: {
          chart: {
            map: vietnam
          },
          title: {
            text: 'Covid 2021'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              alignTo: 'bottom'
            }
          },
          colorAxis: {
            min: 0
          },
          series: [{
            name: 'Tỉnh',
            states: {
              hover: {
                color: '#BADA55'
              }
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            },
            allAreas: false,
            data: [
              ['vn-3655', 0],
              ['vn-qn', 1],
              ['vn-kh', 2],
              ['vn-tg', 3],
              ['vn-bv', 4],
              ['vn-bu', 5],
              ['vn-hc', 6],
              ['vn-br', 7],
              ['vn-st', 8],
              ['vn-pt', 9],
              ['vn-yb', 10],
              ['vn-hd', 11],
              ['vn-bn', 12],
              ['vn-317', 13],
              ['vn-nb', 14],
              ['vn-hm', 15],
              ['vn-ho', 16],
              ['vn-vc', 17],
              ['vn-318', 18],
              ['vn-bg', 19],
              ['vn-tb', 20],
              ['vn-ld', 21],
              ['vn-bp', 22],
              ['vn-py', 23],
              ['vn-bd', 24],
              ['vn-724', 25],
              ['vn-qg', 26],
              ['vn-331', 27],
              ['vn-dt', 28],
              ['vn-la', 29],
              ['vn-3623', 30],
              ['vn-337', 31],
              ['vn-bl', 32],
              ['vn-vl', 33],
              ['vn-tn', 34],
              ['vn-ty', 35],
              ['vn-li', 36],
              ['vn-311', 37],
              ['vn-hg', 150],
              ['vn-nd', 39],
              ['vn-328', 40],
              ['vn-na', 41],
              ['vn-qb', 42],
              ['vn-723', 43],
              ['vn-nt', 44],
              ['vn-6365', 45],
              ['vn-299', 46],
              ['vn-300', 47],
              ['vn-qt', 48],
              ['vn-tt', 49],
              ['vn-da', 50],
              ['vn-ag', 51],
              ['vn-cm', 52],
              ['vn-tv', 53],
              ['vn-cb', 54],
              ['vn-kg', 55],
              ['vn-lo', 56],
              ['vn-db', 57],
              ['vn-ls', 58],
              ['vn-th', 59],
              ['vn-307', 60],
              ['vn-tq', 61],
              ['vn-bi', 62],
              ['vn-333', 63]
            ]
          }]
        },
        tab: null,
        items: [
          'Thời sự', 'Thế giới', 'Thể thao', 'Công nghệ', 'Xe cộ', 'Cổ phiếu', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
  },
  mounted() {
    axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/353412?apikey=A63gH06n0vTQAtiN3eXf74qvycjO8yG9")
    .then(res => {
      let weathers = []
      let arrWeather = []
      for (const item of res.data.DailyForecasts) {
        arrWeather = [{
          dayofweek : dayjs(item.Date).format('dddd'),
          day : Math.round((item.Temperature.Maximum.Value - 32) * 5 / 9),
          night : Math.round((item.Temperature.Minimum.Value - 32) * 5 / 9),
          status : item.Day.IconPhrase,
        }];
        weathers.push(arrWeather)
        this.forecast = weathers
      }
    })
    .catch(err => {
      console.error(err)
    })
  }
}
</script>
<style scoped>
.post_title {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-bottom: 15px;
}
.v-application {
  line-height: 0;
}
</style>
