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
        <v-data-table
            :headers="headers"
            :items="exchanges"
            :sort-by="['calories', 'fat']"
            :sort-desc="[false, true]"
            multi-sort
            class="elevation-1"
        ></v-data-table>
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
