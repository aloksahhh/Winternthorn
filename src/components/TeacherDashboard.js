import React, { useState } from 'react';
import { FiPlay, FiEdit2, FiUsers, FiBarChart2, FiSettings, FiPlus } from 'react-icons/fi';

const TeacherDashboard = () => {
  const [sessionCode, setSessionCode] = useState(null);
  const [activeSessions] = useState([
    { id: 1, name: 'Math 101', students: 24, active: true },
    { id: 2, name: 'Physics Lab', students: 18, active: false },
  ]);

  const handleStartSession = () => {
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    setSessionCode(code);
  };

  const handleEndSession = () => {
    setSessionCode(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Teacher Dashboard</h1>
        <p className="dashboard-subtitle">Manage your classrooms and sessions</p>
      </div>

      {sessionCode && (
        <div className="session-container">
          <h2>Live Session Started</h2>
          <p>Share this code with your students:</p>
          <div className="session-code">{sessionCode}</div>
          <button onClick={handleEndSession} className="action-btn action-btn-secondary">
            End Session
          </button>
        </div>
      )}

      <div className="cards-grid">
        {/* Start Session Card */}
        <div className="card">
          <h3 className="card-title">
            <FiPlay /> Start New Session
          </h3>
          <p className="card-description">
            Create a new live classroom session for your students to join
          </p>
          <div className="card-actions">
            <button onClick={handleStartSession} className="action-btn action-btn-primary">
              Start Session
            </button>
          </div>
        </div>

        {/* Manage Questions Card */}
        <div className="card">
          <h3 className="card-title">
            <FiEdit2 /> Manage Questions
          </h3>
          <p className="card-description">
            Create, edit, and organize questions for your classes
          </p>
          <div className="card-actions">
            <button className="action-btn action-btn-primary">
              <FiPlus /> Add Question
            </button>
            <button className="action-btn action-btn-secondary">
              View All
            </button>
          </div>
        </div>

        {/* Active Sessions Card */}
        <div className="card">
          <h3 className="card-title">
            <FiUsers /> Active Sessions
          </h3>
          <p className="card-description">
            Monitor and manage your ongoing classroom sessions
          </p>
          <div style={{ marginTop: '1rem' }}>
            {activeSessions.map(session => (
              <div key={session.id} style={{
                padding: '0.75rem',
                marginBottom: '0.5rem',
                backgroundColor: 'var(--bg-color)',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <strong>{session.name}</strong>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {session.students} students
                  </div>
                </div>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: session.active ? 'var(--success-color)' : 'var(--text-secondary)',
                  color: 'white',
                  fontSize: '0.75rem'
                }}>
                  {session.active ? 'Active' : 'Ended'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Card */}
        <div className="card">
          <h3 className="card-title">
            <FiBarChart2 /> Analytics
          </h3>
          <p className="card-description">
            View performance analytics and student engagement metrics
          </p>
          <div className="card-actions">
            <button className="action-btn action-btn-primary">
              View Reports
            </button>
          </div>
        </div>

        {/* Settings Card */}
        <div className="card">
          <h3 className="card-title">
            <FiSettings /> Classroom Settings
          </h3>
          <p className="card-description">
            Configure your classroom preferences and access controls
          </p>
          <div className="card-actions">
            <button className="action-btn action-btn-secondary">
              Manage Settings
            </button>
          </div>
        </div>

        {/* Restricted Student Feature */}
        <div className="card restricted">
          <h3 className="card-title">Ask Question</h3>
          <p className="card-description">
            This feature is only available for students
          </p>
          <div className="card-actions">
            <button className="action-btn action-btn-secondary" disabled>
              Ask Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;