// 클래스형 컴포넌트
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class login extends Component {
    state = {
        id: "",
        pw: "",
    };

    inputLogin = async (event: any) => {
        await this.setState({ // 왜 콜백함수가 필요할까
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <div className="p-5">
                <input type="text" name="id" onChange={this.inputLogin} className="block mb-5 w-1/5 border border-green-900 rounded-full focus:outline-none p-3" placeholder="아이디" />
                <input type="password" name="pw" onChange={this.inputLogin} className="block w-1/5 border border-green-900 rounded-full focus:outline-none p-3" placeholder="비밀번호" />
                <Link to="/Main" className="w-1/5 block border border-blue-600 rounded-full focus:outline-none p-3 mt-4 text-center">
                    로그인
                </Link>
            </div >
        );
    }
}

export default login;