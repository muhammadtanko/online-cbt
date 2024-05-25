import React, { useState, useEffect } from 'react';

const ExamPage = () => {
  const initialTimeLeft = localStorage.getItem('cbt_timer') || 120; // Get initial time from localStorage or default to 2 minutes
  const [timeLeft, setTimeLeft] = useState(Number(initialTimeLeft));
  const [timerRunning, setTimerRunning] = useState(true);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What does "HTTPS" stand for?',
      options: ['Hypertext Transfer Protocol Secure', 'Hyper Transfer Protocol Security', 'Hypertext Transfer Protocol Safe', 'Hyper Transfer Protocol Standard'],
      answer: 'Hypertext Transfer Protocol Secure',
      selected: null
    },
    {
      id: 2,
      question: 'What is a "firewall" in computer networking?',
      options: ['A physical barrier to prevent fires in the data center', 'A security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules', 'A device used to boost network signal strength', 'A software tool to organize files and folders on a computer'],
      answer: 'A security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
      selected: null
    },
    {
      id: 3,
      question: 'What is the purpose of "phishing"?',
      options: ['To catch fish in a pond', 'To send unsolicited emails to trick individuals into revealing personal information', 'To install a virus on a computer', 'To block access to a website'],
      answer: 'To send unsolicited emails to trick individuals into revealing personal information',
      selected: null
    },
    {
      id: 4,
      question: 'What is a "password manager"?',
      options: ['A tool for generating strong and unique passwords for different accounts', 'A device for storing physical keys', 'A software program for managing email passwords only', 'A security guard at a data center'],
      answer: 'A tool for generating strong and unique passwords for different accounts',
      selected: null
    },
    {
      id: 5,
      question: 'What is the purpose of "antivirus software"?',
      options: ['To speed up computer performance', 'To prevent unauthorized access to a network', 'To scan and remove malicious software from a computer', 'To encrypt sensitive data'],
      answer: 'To scan and remove malicious software from a computer',
      selected: null
    }
  ]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const startTime = localStorage.getItem('cbt_start_time');
    if (startTime) {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const remainingTime = Math.max(timeLeft - elapsedTime, 0);
      setTimeLeft(remainingTime);
      if (remainingTime === 0) {
        setTimerRunning(false);
      }
    } else {
      localStorage.setItem('cbt_start_time', Date.now());
      localStorage.setItem('cbt_timer', timeLeft);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
        localStorage.setItem('cbt_timer', timeLeft - 1);
      } else {
        setTimerRunning(false);
        alert('Time is up!');
        localStorage.removeItem('cbt_start_time');
        localStorage.removeItem('cbt_timer');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionSelect = (questionId, option) => {
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        if (question.id === questionId) {
          return { ...question, selected: option };
        }
        return question;
      });
    });
  };

  const handleSubmit = () => {
    setTimerRunning(false);
    // Calculate score
    const calculatedScore = questions.reduce((totalScore, question) => {
      return question.selected === question.answer ? totalScore + 1 : totalScore;
    }, 0);
    setScore(calculatedScore);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cybersecurity Exam</h1>
      <div className="flex justify-between mb-4">
        
        <div>
          <p className="text-lg">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
        </div>
      </div>
      <div>
        {questions.map(question => (
          <div key={question.id} className="mb-8">
            <h2 className="text-xl font-bold mb-2">{question.question}</h2>
            <ul className="list-disc pl-5">
              {question.options.map(option => (
                <li key={option} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question_${question.id}`}
                      value={option}
                      checked={question.selected === option}
                      onChange={() => handleOptionSelect(question.id, option)}
                      disabled={!timerRunning} // Disable options when timer is not running
                      className="mr-2"
                    />
                    <span>{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        {score !== null ? (
          <p>Your score: {score}/{questions.length}</p>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit} disabled={!timerRunning}>Submit Exam</button>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
