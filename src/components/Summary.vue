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
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-center" mt-5>
                    <h1>Market Summary</h1>
                </v-flex>
                <v-flex xs12 class="text-xs-center" mt-3>
                    <p>
                        The Market Summary page contains a number of tables summarizing major areas of the market, including major markets and indexes, sectors and industries, international markets, bonds, commodities, currencies and market breadth measures (such as Bullish Percent Indices).
                    </p>
                </v-flex>
            </v-layout>
        </v-container>    
        <v-card>    
            <v-card-title class="blue darken-2" dark>
                <v-toolbar-title>Major Exchange</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="exchanges"
                :sort-by="['calories', 'fat']"
                :sort-desc="[false, true]"
                multi-sort
                dark
                class="elevation-1"
            ></v-data-table>
        </v-card>
    </v-container>
</template>

<script>
    import axios from 'axios'
    import config from '../config.js'
    import sampleData from '@/assets/sampleSummaryData.json'

    export default {
        data () {
            return {
                headers: [
                    { text: 'Symbol', align: 'left', sortable: false, value: 'symbol', },
                    { text: 'Name', value: 'shortName' },
                    { text: 'Close', value: 'regularMarketPreviousClose.fmt' },
                    { text: 'Change', value: 'regularMarketChange.fmt' },
                    { text: 'Change %', value: 'regularMarketChangePercent.fmt' },
                ],
                exchanges: sampleData.marketSummaryResponse.result,
                loading: false
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
