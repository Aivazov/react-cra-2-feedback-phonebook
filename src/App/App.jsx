import './App.css';
// import styled from '@emotion/styled';
import Statistics from '../Statistics/Statistics';
import Phonebook from '../Phonebook/Phonebook';
import { EmotionContainer } from './App.styled';
import Task from '../Task/Task';

function App() {
  return (
    <div className="App">
      <Task numberOf={1} />
      <EmotionContainer>
        <Statistics />
      </EmotionContainer>
      <Task numberOf={2} />
      <EmotionContainer>
        <Phonebook />
      </EmotionContainer>
    </div>
  );
}

export default App;
