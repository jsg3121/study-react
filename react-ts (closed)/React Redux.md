# **React Redux**

----------------------

## 	구성요소

- ### action

  - 애플리케이션에서 사용하는 명령어(**action type**)와 API 통신과 같은 작업을 하는 액션 메서드를 모아둔 폴더
  - 모든 명령어와 액션 메서드를 한 곳에 모아두거나 도메인별로 구분해 나눠 놓기도 한다.

- ### component

  - React 컴포넌트로 구성된 폴더
  - 컨테이너 컴포넌트와 프레젠테이션 컴포넌트를 구분해서 개발
    - 컨테이너 컴포넌트 : 여러 개의 프레젠테이션 컴포넌트로 구성되어 있으며, 데이터나 공통으로 관리해야 하는 객체, 컴포넌트간 인터랙션등을 관리
    - 프레젠테이션 컴포넌트 : 일반적으로 알고있는 UI 컴포넌트

- ### reducer

  - 리듀서(**reducer**)로 구성된 폴더
  - 액션 메서드에서 상태를 받아 기존의 상태를 새로운 상태로 변경하는 작업을 함
  - action폴더와 같이 하나로 만들기도 하지만 도메인별로 구분해 만들기도 한다.

- ### store

  - index.js파일 하나만 있으며, 주로 미들웨어를 설정하느 일을 한다.
  - 비동기 통신을 사용하기 위해 **redux-thunk** 라이브러리를 설정하거나 state의 변경 내역을 관리하기 위해 **react-router-redux**라이브러리를 추가하거나, 디버깅을 위해 **react-devtool**을 설정하는 일을 주로 한다.

  
