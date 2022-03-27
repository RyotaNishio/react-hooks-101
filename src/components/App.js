import {useState, useReducer} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import reducer from '../reducers'
import Event from "./Event";

const App = () => {
  const [state, disPatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    disPatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" value={title} onChange={e => {
            setTitle(e.target.value)
          }}/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => {
            setBody(e.target.value)
          }}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
        <th>ID</th>
        <th>タイトル</th>
        <th>ボディー</th>
        <th></th>
        </thead>
        <tbody>
        { state.map((event, index) => (<Event key={index} event={event} disPatch={disPatch}/> ))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
