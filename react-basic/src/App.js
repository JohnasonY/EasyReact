//The root component of the project
//App -> index.js -> public/index.html(root)

import { useState } from "react";
import './index.css'

const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' }
]

const isLogin = false;

//define article type
const articleType = 1;

//define core function(return JSX template according to the article type)
function getArticleTem(){
  if(articleType === 0){
    return <div>I am no image article</div>
  }
  else if(articleType === 1){
    return <div>I am single image article</div>
  }
  else{
    return <div>I am three images article</div>
  }
}

//define component
function Button(){
  return <button>click me!</button>
}

// accomplish a counting button by useState

function App() {
  // const handleClick = () => {
  //   console.log('button was clicked')
  // }

  // event parameter e
  // const handleClick = (e) => {
  //   console.log('button was clicked', e)
  // }

  // pass custom parameter
  // const handleClick = (name) => {
  //   console.log('button was clicked', name)
  // }

  // custom parameter and event object e
  const handleClick = (name, e) => {
    console.log('button was clicked', name, e)
  }

  //1. use useStaet to add a state variable
  // count: state variable
  // setCount: method of modifing state variable
  const [count, setCount] = useState(0);

  //2. click event return
  const handleClick1 = () => {
    setCount(count + 1);
  }

  //modify object state
  const [form, setForm] = useState({name: 'jack'});

  const changeForm = () => {
    setForm({
      ...form,
      name: 'john'
    })
  }
  return (
    <div className="App">
      <div>
        this is App
      </div>

      <div>
        {'this is AppOne'}
      </div>

      <div>
        {new Date().getDate()}
      </div>

      <div style={{ color: 'red'}}>
        this is red
      </div>

      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      
      {/*logic and &&*/}
      {isLogin && <span>this is span</span>}

      {/*ternary operation*/}
      {isLogin ? <span>jack</span> : <span>loading...</span>}

      {getArticleTem()}

      <button onClick={(e) => handleClick('jack', e)}>click me</button>

      {/* render component */}
      <Button></Button>


      <button onClick={handleClick1}>{count}</button>

      <button onClick={changeForm}>modify form {form.name}</button>

      <div className="foo">this is class foo</div>
    </div>
  );
}

export default App;
