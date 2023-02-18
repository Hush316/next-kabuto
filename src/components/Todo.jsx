function Todo(props) {
  function handleDelete() {
    console.log('delete');
    console.log(props.text);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Todo
