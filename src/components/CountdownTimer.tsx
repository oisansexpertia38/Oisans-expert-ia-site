import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (deadline: string): TimeLeft | null => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft: TimeLeft | null = null;

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

const CountdownTimer: React.FC<{ deadline: string }> = ({ deadline }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(deadline));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(deadline));
        }, 1000);

        return () => clearInterval(timer);
    }, [deadline]);

    if (!timeLeft) {
        return <div className="text-center font-bold text-warning text-lg">L'offre a expiré !</div>;
    }

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <div className="flex justify-center items-center space-x-2 md:space-x-4 text-secondary" aria-label="Compte à rebours avant la fin de l’offre Répondeur IA">
            <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold font-heading">{timeLeft.days}</div>
                <div className="text-xs uppercase tracking-wider">Jours</div>
            </div>
            <div className="text-3xl md:text-5xl font-bold pb-4">:</div>
            <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold font-heading">{formatNumber(timeLeft.hours)}</div>
                <div className="text-xs uppercase tracking-wider">Heures</div>
            </div>
            <div className="text-3xl md:text-5xl font-bold pb-4">:</div>
            <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold font-heading">{formatNumber(timeLeft.minutes)}</div>
                <div className="text-xs uppercase tracking-wider">Minutes</div>
            </div>
            <div className="text-3xl md:text-5xl font-bold pb-4">:</div>
            <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold font-heading">{formatNumber(timeLeft.seconds)}</div>
                <div className="text-xs uppercase tracking-wider">Secondes</div>
            </div>
        </div>
    );
};

export default CountdownTimer;
