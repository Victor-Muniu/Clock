import { useEffect, useState } from 'react';
import { Palette, Clock, Volume2 } from 'lucide-react';
import Fireworks from './pages/FireWorks';
function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-01-01T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsNewYear(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="countdown-container">
      <div className="countdown-circle">
      <div className="countdown-content">
          {isNewYear ? (
            <>
              <h1 className="countdown-title">HAPPY NEW YEAR 2025!</h1>
              <Fireworks />
            </>
          ) : (
            <>
              <h1 className="countdown-title">NEW YEAR COUNTDOWN</h1>
              <div className="countdown-timer">
                <div className="countdown-block">
                  <div className="countdown-number">{formatNumber(timeLeft.days)}</div>
                  <div className="countdown-label">DAYS</div>
                </div>
                <div className="countdown-block">
                  <div className="countdown-number">{formatNumber(timeLeft.hours)}</div>
                  <div className="countdown-label">HOURS</div>
                </div>
                <div className="countdown-block">
                  <div className="countdown-number">{formatNumber(timeLeft.minutes)}</div>
                  <div className="countdown-label">MINUTES</div>
                </div>
                <div className="countdown-block">
                  <div className="countdown-number">{formatNumber(timeLeft.seconds)}</div>
                  <div className="countdown-label">SECONDS</div>
                </div>
              </div>
              <div className="countdown-subtitle">Counting down to 2025</div>
            </>
          )}
          <div className="countdown-controls">
            <button className="control-button">
              <Palette size={16} />
              Change Colors
            </button>
            <button className="control-button">
              <Clock size={16} />
              Set Time Zone
            </button>
            <button className="control-button">
              <Volume2 size={16} />
              Toggle Sound
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .countdown-container {
  background-color:rgb(15, 15, 31);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Arial, sans-serif;
  position: relative;
}

.countdown-circle {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.countdown-circle::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a90e2, #9b51e0);
  filter: blur(20px);
  opacity: 0.5;
}

.countdown-circle::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a90e2, #9b51e0);
  z-index: -1;
}

.countdown-content {
  text-align: center;
  z-index: 1;
}

.countdown-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}

.countdown-timer {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.countdown-block {
  text-align: center;
}

.countdown-number {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.countdown-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.countdown-subtitle {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.countdown-controls {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.control-button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.75rem 1.5rem;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s;
}

.control-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.control-button svg {
  width: 16px;
  height: 16px;
}

        `}
      </style>
    </div>
  )
}
export default App;
