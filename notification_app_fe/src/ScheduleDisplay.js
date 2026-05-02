import React, { useState, useEffect } from 'react';
import './ScheduleDisplay.css';

const ScheduleDisplay = () => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/schedule');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSchedule(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setSchedule(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) {
    return (
      <div className="schedule-container">
        <div className="loading">Loading schedule data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="schedule-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!schedule) {
    return (
      <div className="schedule-container">
        <div className="error">No data available</div>
      </div>
    );
  }

  const vehicleCount = schedule.selectedVehicles?.length || 0;

  return (
    <div className="schedule-container">
      <div className="schedule-card">
        <h2>Maintenance Schedule</h2>
        
        <div className="card-content">
          <div className="info-row">
            <label>Depot ID:</label>
            <span className="value">{schedule.depotId}</span>
          </div>
          
          <div className="info-row">
            <label>Total Impact:</label>
            <span className="value impact">{schedule.totalImpact}</span>
          </div>
          
          <div className="info-row">
            <label>Selected Vehicles:</label>
            <span className="value vehicles">{vehicleCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDisplay;
