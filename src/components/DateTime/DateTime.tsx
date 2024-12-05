import { useEffect, useState } from 'react';
import './DateTime.scss';

export const DateTime: React.FC = () => {
  const [time, setTime] = useState<string>();
  const [date, setDate] = useState<string>();
  const [weekday, setWeekday] = useState<string>();

  useEffect(() => {
    const updateDate = () => {
      const now: Date = new Date();

      const actualTime: string = now.toLocaleTimeString('uk-UA');
      const actualDate: string = now.toLocaleDateString('uk-UA', {
        day: 'numeric',
        month: 'long',
      });
      const actualWeekday: string = now.toLocaleDateString('uk-UA', {
        weekday: 'long',
      });

      setTime(actualTime);
      setDate(actualDate);
      setWeekday(actualWeekday);
    };

    const interval = setInterval(updateDate, 1000);

    updateDate();

    return () => clearInterval(interval);
  }, []);

  return (
    <li className="dashboard__dataTime">
      <div className="dashboard__dataTime-time">{time}</div>
      <div className="dashboard__dataTime-date">
        <p className="date">{date}</p>
        <p>{weekday}</p>
      </div>

      <img src="./imgs/Cloud.svg" alt="Weather" />
      <div className="dashboard__dataTime-weather">
        <p className="temperature">11°C</p>
        <p className="description">Cloudy</p>
      </div>
    </li>
  );
};
