<template>
    <v-container v-if="loading">
        <div class="text-xs-center">
            <v-progress-circular
                indeterminate
                :size="150"
                :width="8"
                color="blue">
            </v-progress-circular>
        </div>
    </v-container>
    <v-container v-else grid-list-xl>
        <v-layout wrap>
            <v-card v-for="(item, index) in wholeResponse" :key="index" >
                <v-list-item row>
                    <div>
                        <h2>{{item.symbol}}</h2>
                        <p>{{item.shortName}}</p>
                    </div>
                    <div>
                        <h3>{{item.regularMarketPrice.fmt}}</h3>
                    </div>
                    <div>
                        <p>{{item.regularMarketChange.fmt}}</p>
                        <p>{{item.regularMarketChangePercent.fmt}}</p>
                    </div>
                </v-list-item>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import config from '../config.js'

    export default {
        data () {
            return {
                wholeResponse: [],
                loading: true
            }
        },
        mounted () {
            // axios({
            //     "method":"GET",
            //     "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary",
            //     "headers":{
            //         "content-type":"application/octet-stream",
            //         "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
            //         "x-rapidapi-key": config.RAPID_API_KEY
            //     },
            //     "params":{
            //         "region":"US",
            //         "lang":"en"
            //     }
            // })
            // .then((response) => {
            //     console.log(response)
            //     this.wholeResponse = response.data.marketSummaryResponse.result
            //     this.loading = false
            // })
            // .catch((error) => {
            //     console.log(error)
            // })
        },
    }
</script>

<style lang="scss" scoped>

</style>
