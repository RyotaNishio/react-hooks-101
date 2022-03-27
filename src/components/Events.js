import Event from "./Event";

const Events = props => {
  const { state, dispatch } = props

  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
        <th>ID</th>
        <th>タイトル</th>
        <th>ボディー</th>
        <th></th>
        </thead>
        <tbody>
        {state.map((event, index) => (<Event key={index} event={event} disPatch={dispatch}/>))}

        </tbody>
      </table>
    </>
  )
}

export default Events