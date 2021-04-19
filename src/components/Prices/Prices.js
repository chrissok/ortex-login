import React, { useEffect, useState } from 'react'
import moment from 'moment'
import spinner from '../../assets/spinner.gif'
import { styles } from './Prices.style';


export default function Prices() {

    const webSocket = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');

    const [eurUsdExchange, setEurUsdExchange] = useState("")
    const [dateTime, setDateTime] = useState("")
    const [loading, setLoading] = useState(true)

    function isNewData(data) {
        return data.topic === "keepalive"
    }

    useEffect(() => {
        webSocket.onopen = (e) => {
            webSocket.send(`{"topic": "subscribe", "to": "EURUSD:CUR"}`)
        }

        webSocket.onmessage = (event) => {
            const data = JSON.parse(event.data)

            if (isNewData(data)) {
                return
            } else {
                setLoading(false)
                setDateTime(data.dt)
                setEurUsdExchange(data.price)
            }
        }

        webSocket.onerror = (error) => {
            console.log("error" + error)
        }
    })

    return (
        <div className={styles.container}>

            {loading && <img alt="spinner" src={spinner}></img>}

            {eurUsdExchange && <div className={styles.eurUsdExchange}> EUR/USD </div>}

            {eurUsdExchange && <div className={styles.price}> {eurUsdExchange} </div>}

            {dateTime && <div className={styles.dateTime}> {moment(dateTime).format('LLL')} </div>}
        </div>
    )
}
