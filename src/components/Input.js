import React, { useState } from 'react';
import {getKey} from "../lib/util";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({putItems}) {
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue((prevState) => {
      prevState = e.target.value;
      return prevState;
    })
  }

  const hanleKeyDown = (e) => {
    if (e.key === 'Enter'){
      if(value == '') return;
      putItems((prevState) => {
        prevState = [...prevState, { key: getKey(), text: value, done: false }];
        return prevState;
      })

      setValue((prevState) => {
        prevState = '';
        return prevState;
      })
    }
  }
  
  return (
    <div className="panel-block">
      <input
        placeholder="Todoを入力してください"
        value={value} 
        type="text" 
        onKeyDown={e => hanleKeyDown(e)} 
        onInput={e => handleInput(e)} 
      />
    </div>
  );
}

export default Input;
