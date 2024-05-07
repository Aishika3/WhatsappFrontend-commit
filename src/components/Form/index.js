import React, { useState } from 'react';
import './styles.css'

const QuestionForm = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const addQuestion = () => {
    setQuestions([...questions, '']);
  }

  const addAnswer = () => {
    setQuestions([...questions, '']);
  }

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  }

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here
  }

  return (
    <form onSubmit={handleSubmit} className="question-form">
      {questions.map((question, index) => (
        <div className='question-item' key={index}>
          <label htmlFor={`question${index}`}>Question {index + 1}</label>
          <input
            type="text"
            id={`question${index}`}
            value={question}
            className="question-input"
            onChange={(event) => handleQuestionChange(index, event.target.value)}
          />
          <label htmlFor={`question${index}`}>Answer {index + 1}</label>
          <input
            type="text"
            id={`question${index}`}
            className="question-input"
            value={question}
            onChange={(event) => handleAnswerChange(index, event.target.value)}
          />
        </div>
        
      ))}
      <button type="button" onClick={addQuestion} className="add-question-button">Add Question</button>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default QuestionForm;
