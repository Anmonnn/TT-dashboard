import { DeviceData } from '../../App';
import { DateTime } from '../DateTime/DateTime';
import { DeviceItem } from '../DeviceItem/DeviceItem';
import './DeviceList.scss';
import { useWindowSize } from '../../utils/customHooks';
import { useEffect, useState } from 'react';

interface T {
  devData: DeviceData[];
}

export const DeviceList: React.FC<T> = ({ devData }) => {
  const { windowWidth } = useWindowSize();
  const [count, setCount] = useState<number>(6);
  // windowWidth та count використовуються в логіці відображення кількості клітиновк, відповідно до розміру екрана пристою
  // Якщо ви вважаєте що, для такої маленької фічі це занадто, то можна видалити це та використати закоментовані стилі в 'DeviceList.scss'

  const updateCount = (width: number) => {
    if (width < 1200) {
      setCount(3);
    } else if (width < 1500) {
      setCount(4);
    } else if (width < 1800) {
      setCount(5);
    } else {
      setCount(6);
    }
  };

  useEffect(() => {
    updateCount(windowWidth);
  }, [windowWidth]);

  return (
    <ul
      className="dashboard__list"
      style={{
        width: `${count * 284 - 10}px`,
      }}
    >
      <DateTime />

      {devData.map(device => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </ul>
  );
};
