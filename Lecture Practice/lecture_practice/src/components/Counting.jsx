import React, { useState } from "react";

const Counting = () => {
  const [count, setcount] = useState(0);

  return (
    <>
     <div id="box">
      <div id="boxcounter">
        <div className="counting">
          <p id="para">Counting clicked {count} times</p>
          <button id="addbutton"onClick={() => {setcount(count + 1)}}>Click Me to Add</button>
          <button id="decbutton" onClick={()=>{setcount(count-1)}}>Click Me to Decrease</button>
          <button id="resetbutton" onClick={()=>{setcount(count==0)}}>Click Me to Reset</button>
          <p>Thank you for using app</p>
          
        </div>
      </div>
     </div>
    </>
  );
};

export default Counting;
