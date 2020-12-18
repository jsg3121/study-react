// 함수형 컴포넌트
import React from 'react';
import { Link } from "react-router-dom";

let loginInfo = {
    id: "",
    pw: "",
};

const inputLogin = (event: any) => {
    event.target.name === "id" ? loginInfo.id = event.target.value : loginInfo.pw = event.target.value;
    console.log(loginInfo);
};

function login() {
    return (
        <div className="p-5">
            <input type="text" name="id" onChange={inputLogin} className="block mb-5 w-1/5 border border-green-900 rounded-full focus:outline-none p-3" placeholder="아이디" />
            <input type="password" name="pw" onChange={inputLogin} className="block w-1/5 border border-green-900 rounded-full focus:outline-none p-3" placeholder="비밀번호" />
            <Link to="/Main" className="w-1/5 block border border-blue-600 rounded-full focus:outline-none p-3 mt-4 text-center">
                로그인
            </Link>
        </div >
    );
}

export default login;