import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import CreateNotate from './components/CreateNotate';
// import { DatePicker } from 'antd';

function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  })

  // const notateList = [
  //   {
  //     name: 'Vasyl',
  //     title: 'Shop notate',
  //     text: 'By 1L of milk',
  //     color: 'red',
  //     id: 1
  //   },
  //   {
  //     name: 'Peter',
  //     title: 'Shop notate',
  //     text: 'By 1L of milk',
  //     color: 'green',
  //     id: 2
  //   }
  // ]

  // const onDateChange = (event) => {
  //   console.log('event', event)

  // }

  return (
    <div className="App">
      <CreateNotate />
      {
        notes.map(({name, title, color, text, _id}) => {
          return <Card key={_id} title={title} text={text} name={name} color={color} />
        })
      }
      {/* <Card name="Maria" color='#84a' />
      <Card />
      <Card name="Katy" color='rgb(150, 100, 212)' />
      <Card name="Katy" color='rgb(150, 100, 212)' />
      <Card name="Katy" color='rgb(150, 100, 212)' /> */}
      {/* <DatePicker onChange={onDateChange} /> */}
    </div>
  );
}

export default App;
