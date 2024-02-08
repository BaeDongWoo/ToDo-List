# My-ToDo

![시작](https://github.com/BaeDongWoo/ToDo-List/assets/114900672/5e70b746-1398-4cd3-a182-34e43b1edb4c)

<h3>❓My-ToDo?</h3>

> 캘린더를 활용해 일별 할일을 등록하는 서비스

## <p>##파이어베이스로 변경 및 소셜 로그인 추가 진행중##</p>

<h3>🚀링크</h3>

> https://baedongwoo.github.io/ToDo-List/

---

<h3>🔨기술 스택</h3>

---

<div align=left>

### ✔️Frond-end

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> 
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">

### ✔️Back-end

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <br>

### ✔️DB

<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
</div>

<h3>📅개발 기간</h3>
- 2023.11.23~2023.12.04
<h3>😄개발 인원</h3>
- 1인 개인 프로젝트

<h3>📓 서비스 화면</h3>

![My_ToDo-001](https://github.com/BaeDongWoo/ToDo-List/assets/114900672/7e13d634-913e-4d22-8241-d93e821ff52e)

<h3>프로젝트 상세</h3>
<h3>💡주요 기능</h5>

- 캘린더를 통해 사용자가 저장해 놓았던 할일 목록을 날짜별로 미리보기
- 캘린더의 날짜 선택시 해당 날짜의 할일 목록을 확인
- 선택한 날짜의 일정 목록을 수정

<h3>구현 상세</h3>
<h4>JWT 토큰</h4>

- 사용자 로그인 시 JWT 토큰을 발급
- 할일 목록 작성시 토큰을 통해 확인
- 30분마다 새로운 토큰을 발급

<h4>상태관리(Redux Store)</h4>

- 사용자 로그인시 서버로 부터 받은 사용자 정보와 할일 목록을 전역으로 사용하기위해 Redux Store에 저장하고 이를 각 컴포넌트에서 사용

<h4>캘린더</h4>

- JavaScript의 Date()함수를 활용해 캘린더 구현

<h4>드래그 앤 드롭(react-beautiful-dnd)</h4>

- 사용자 경험 향상을 위해 리액트의 라이브러리인 react-beautiful-dnd를 사용
- 드래그를 통해 쉽게 목록 변경가능

<h3>서비스 영상</h3>
<h4>신규 회원 가입</h4>

https://github.com/BaeDongWoo/ToDo-List/assets/114900672/ccc9783e-bd9a-41c7-b38b-98f33ebbbe8e

<h4>기존 사용자</h4>

https://github.com/BaeDongWoo/ToDo-List/assets/114900672/1c83734e-26f0-4515-a232-8eb4a9deba92
