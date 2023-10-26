import {useState} from 'react'

export default function CreateNotate() {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  const onTitleChange = event => {
    const inputName = event.target.name
    switch (inputName) {
      case 'title':
        setTitle(event.target.value)
        break;
      case 'text':
        setText(event.target.value)
        break;
      case 'name':
        setName(event.target.value)
        break;
      case 'color':
        setColor(event.target.value)
        break;
    
      default:
        break;
    }
  }

  const clearInputs = () => {
    setTitle('')
    setText('')
    setName('')
    setColor('')
  }

  const onSaveClick = () => {
    const data = {
      title, text, name, color
    }
    fetch('http://localhost:9000/note', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(res => {
      clearInputs()
    })
  }

  return (
    <div>
      <div>
        title: <input name='title' onChange={onTitleChange} value={title} />
      </div>
      <div>
        text: <input name='text' onChange={onTitleChange} value={text} />
      </div>
      <div>
        name: <input name='name' onChange={onTitleChange} value={name} />
      </div>
      <div>
        color: <input name='color' onChange={onTitleChange} value={color} />
      </div>
      <button onClick={onSaveClick}>Save Notate</button>
    </div>
  )
}
