import React, { useState } from 'react';
import './App.scss';
import { DeviceList } from './components/DeviceList/DeviceList';

export interface DeviceData {
  id: string;
  title: string;
  value: number;
}

const deviceData: DeviceData[] = [
  { id: '1', title: 'Каса', value: 2546 },
  { id: '2', title: 'KCO', value: 2737 },
  { id: '3', title: 'KCO (Windows)', value: 1496 },
  { id: '4', title: 'Door', value: 1204 },
  { id: '5', title: 'Printed today', value: 241334 },
  {
    id: '6',
    title: 'Daily Active Users (mobile)',
    value: 35795,
  },
];

export const App: React.FC = () => {
  const [devData] = useState<DeviceData[]>(deviceData);

  return (
    <div
      className="dashboard"
      style={{
        backgroundImage: `url(/imgs/BG-pexels-charlotte-may.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <DeviceList devData={devData} />
    </div>
  );
};
