import React, { useRef, useState, useEffect } from "react";
import "./countdown.styles.css";

type Props = {
    target: string
}

export default function Countdown({ target }: Props) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [inputDate, setInputDate] = useState(target);

    let interval = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        const countdownDate = new Date(inputDate).getTime();
        interval.current = setInterval(() => {
            const currentDate = new Date().getTime();
            const distance = countdownDate - currentDate;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                // update timer
                setDays(days);
                setHours(hours);
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })

    return (
        <section className="time-container hero__subtitle">
            <section className="timer">
                <div>
                    <section>
                        <p>{days}</p>
                        <p>
                            <small>Days</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{hours}</p>
                        <p>
                            <small>Hours</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{minutes}</p>
                        <p>
                            <small>Minutes</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{seconds}</p>
                        <p>
                            <small>Seconds</small>
                        </p>
                    </section>
                </div>
            </section>
        </section>
    );
};