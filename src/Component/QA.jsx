import React, { useState } from "react";

function QA({ que, ans }) {
  const [open, setOpen] = useState(false);
  const handlClick = () => setOpen(!open);
  return (
    <div className="accordion">
      <div className=" acoridion_que" onClick={handlClick} key={e.id}>
        <h2>{que}</h2>
        {open ? <p>× </p> : <p>+</p>}
      </div>

      {open ? (
        <div className="accordion_ans">
          <p>{ans}</p>
        </div>
      ) : null}
    </div>
  );
}

export default QA;
