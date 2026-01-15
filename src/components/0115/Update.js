import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const [data, setData] = useState({
    name: "",
    author: "",
    price: "",
    id: "",
  });
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(`/`);
  };

  const onChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

function updateDataToJSONFile() {
  /*
  TODO: (선택) 실습
  - 'https://696202ead9d64c761906b8f3.mockapi.io/books/:id' 주소로 fetch API를 사용해 PUT 요청을 보내세요.
  - 요청이 성공하면 alert로 알림을 띄우고, navigate를 사용해 메인 페이지('/')로 이동시키세요.
  - 요청 시 body에는 id를 제외한 나머지 데이터(name, author, price)를 JSON 형태로 담아 보내세요.
  - ID가 입력되지 않았을 경우 alert로 사용자에게 알려주세요.
  */
  console.log("Update할 데이터:", data);
}

  return (
    <div>
      <h1 className="modal-title fs-5" id="exampleModalLabel">
        UPDATE BOOK INFO
      </h1>

      <div className="input-group">
        ID: <input onChange={onChangeInput} type="text" placeholder="id" name="id" />
      </div>
      <div className="input-group">
        NAME: <input onChange={onChangeInput} type="text" placeholder="name" name="name" />
      </div>
      <div className="input-group">
        AUTHOR: <input onChange={onChangeInput} type="text" placeholder="author" name="author" />
      </div>
      <div className="input-group">
        PRICE: <input onChange={onChangeInput} type="number" placeholder="price" name="price" />
      </div>
      <button type="button" onClick={onClickBtn}>
        Close
      </button>
      <button type="button" class="btn btn-primary" onClick={updateDataToJSONFile}>
        Update
      </button>
    </div>
  );
}

export default Update;
