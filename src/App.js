import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021,10, 14)
    },
    { id: 'e2', title: 'New TV', amount: 49949, date: new Date(2021, 7, 12) },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    }, 
     {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
    {
      id: 5,
      title : 'Electricity Bill',
      amount : 8000,
      date : new Date(2021,10,16)
    }
  ] 

  return (
    <div>
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
