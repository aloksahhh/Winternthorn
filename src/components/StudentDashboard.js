import React, { useState } from 'react';
import { FiUsers, FiMessageSquare, FiBookOpen, FiAward, FiClock, FiSend } from 'react-icons/fi';

const StudentDashboard = () => {
  const [sessionCode, setSessionCode] = useState('');
  const [question, setQuestion] = useState('');
  const [joinedSession, setJoinedSession] = useState(null);
  const [questions, setQuestions] = useState([
    { id: 1, text: 'How does quantum entanglement work?', upvotes: 12, answered: false },
    { id: 2, text: 'Can you explain the double-slit experiment?', upvotes: 8, answered: true },
  ]);

  const handleJoinSession = () => {
    if (sessionCode.trim()) {
      setJoinedSession(sessionCode.toUpperCase());
      setSessionCode('');
    }
  };

  const handleAskQuestion = () => {
    if (question.trim()) {
      const newQuestion = {
        id: questions.length + 1,
        text: question,
        upvotes: 0,
        answered: false
      };
      setQuestions([newQuestion, ...questions]);
      setQuestion('');
    }
  };

  const handleUpvote = (id) => {
    setQuestions(questions.map(q =>
      q.id === id ? { ...q, upvotes: q.upvotes + 1 } : q
    ));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Student Dashboard</h1>
        <p className="dashboard-subtitle">Join sessions and participate in class</p>
      </div>

      {joinedSession && (
        <div className="session-container">
          <h2>Joined Session: {joinedSession}</h2>
          <p>You are now connected to the classroom session</p>
          <button 
            onClick={() => setJoinedSession(null)} 
            className="action-btn action-btn-secondary"
          >
            Leave Session
          </button>
        </div>
      )}

      <div className="cards-grid">
        {/* Join Session Card */}
        <div className="card">
          <h3 className="card-title">
            <FiUsers /> Join Session
          </h3>
          <p className="card-description">
            Enter the session code provided by your teacher to join the class
          </p>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Enter session code"
              value={sessionCode}
              onChange={(e) => setSessionCode(e.target.value)}
              style={{ marginBottom: '0.5rem' }}
            />
            <button onClick={handleJoinSession} className="action-btn action-btn-primary">
              Join Session
            </button>
          </div>
        </div>

        {/* Ask Question Card */}
        <div className="card">
          <h3 className="card-title">
            <FiMessageSquare /> Ask Question
          </h3>
          <p className="card-description">
            Ask questions during the session. Other students can upvote important questions.
          </p>
          <div style={{ marginBottom: '1rem' }}>
            <textarea
              className="form-input"
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows="3"
              style={{ marginBottom: '0.5rem', resize: 'vertical' }}
            />
            <button onClick={handleAskQuestion} className="action-btn action-btn-primary">
              <FiSend /> Ask Question
            </button>
          </div>
        </div>

        {/* Recent Questions Card */}
        <div className="card">
          <h3 className="card-title">
            <FiBookOpen /> Recent Questions
          </h3>
          <p className="card-description">
            Questions asked by you and other students
          </p>
          <div style={{ marginTop: '1rem' }}>
            {questions.map(q => (
              <div key={q.id} style={{
                padding: '0.75rem',
                marginBottom: '0.5rem',
                backgroundColor: 'var(--bg-color)',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>{q.text}</strong>
                  <button 
                    onClick={() => handleUpvote(q.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary-color)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <FiAward /> {q.upvotes}
                  </button>
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: q.answered ? 'var(--success-color)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <FiClock />
                  {q.answered ? 'Answered by teacher' : 'Waiting for answer'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class Materials Card */}
        <div className="card">
          <h3 className="card-title">
            <FiBookOpen /> Class Materials
          </h3>
          <p className="card-description">
            Access lecture notes, assignments, and study materials
          </p>
          <div className="card-actions">
            <button className="action-btn action-btn-primary">
              View Materials
            </button>
            <button className="action-btn action-btn-secondary">
              Download All
            </button>
          </div>
        </div>  {/* ← THIS WAS THE MISSING CLOSING DIV */}

        {/* Grades Card */}
        <div className="card">
          <h3 className="card-title">
            <FiAward /> Grades & Progress
          </h3>
          <p className="card-description">
            Check your grades, assignments, and overall progress
          </p>
          <div className="card-actions">
            <button className="action-btn action-btn-primary">
              View Grades
            </button>
            <button className="action-btn action-btn-secondary">
              Progress Report
            </button>
          </div>
        </div>

        {/* Restricted Teacher Feature */}
        <div className="card restricted">
          <h3 className="card-title">Start Session</h3>
          <p className="card-description">
            This feature is only available for teachers
          </p>
          <div className="card-actions">
            <button className="action-btn action-btn-secondary" disabled>
              Start Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;