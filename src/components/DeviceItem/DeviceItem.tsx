import { DeviceData } from '../../App';
import './DeviceItem.scss';

interface T {
  device: DeviceData;
}

export const DeviceItem: React.FC<T> = ({ device }) => {
  return (
    <li className="dashboard__item">
      <p className="dashboard__item-value">{device.value}</p>
      <div className="dashboard__item-title">
        <p>{device.title}</p>
      </div>
    </li>
  );
};
