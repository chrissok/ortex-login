import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { styles } from './Prices.style';


export default function Prices() {

    const webSocket = new WebSocket('ws://stream.tradingeconomics.com/?client=guest:guest');

    const [eurUsdExchange, setEurUsdExchange] = useState("")
    const [dateTime, setDateTime] = useState("")

    function isNewData(data) {
        return data.topic === "keepalive"
    }

    useEffect(() => {
        webSocket.onopen = (e) => {
            webSocket.send(`{"topic": "subscribe", "to": "EURUSD:CUR"}`)
        }

        webSocket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            console.log(data)

            if (isNewData(data)) {
                return
            } else {
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
            <div className={styles.eurUsdExchange}>
                EUR/USD
            </div>
            <div className={styles.price}>
                {eurUsdExchange}
            </div>
            <div className={styles.dateTime}>
                {moment(dateTime).format('LLL')}
            </div>
        </div>
    )
}
