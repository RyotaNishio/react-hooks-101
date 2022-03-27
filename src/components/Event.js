const Event = ({disPatch, event}) => {
  const id = event.id
  const handleClickDelete = () => {
    disPatch({type: 'DELETE_EVENT', id})
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleClickDelete}>削除</button>
      </td>
    </tr>
  )
}

export default Event