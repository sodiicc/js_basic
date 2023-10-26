export default function Card({title, text, name = 'Bob', color = 'purple' }) {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <div>{text}</div>
      <h3 style={{ color }}>This is {name}'s Card</h3>
    </div>
  )
}
