# My-ToDo

![시작](https://github.com/BaeDongWoo/ToDo-List/assets/114900672/5e70b746-1398-4cd3-a182-34e43b1edb4c)

<h3>❓My-ToDo?</h3>

> 캘린더를 활용해 일별 할일을 등록하는 서비스

<h3>🚀배포 링크</h3>

> https://bdw-my-todo.vercel.app

<h3>테스트용 계정</h3>

> 아이디 : test@naver.com
>
> 비밀번호 : test12345
>
> 직접 가입하셔도 됩니당@

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
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
</div>

<h3>📅 1차 개발 기간</h3>
- 2023.11.23~2023.12.04

<h3>📅 2차 개발 기간</h3>
- 2024.02.15~2024.02.20

<h3>변경 및 추가 사항</h3>

> 1. firebase Authentication
>    - 기존에는 로컬환경에서만 로그인 및 회원 가입이 가능했지만 firebase 인증을 통해 배포 환경에서도 로그인 및 회원가입이 가능하도록 변경
> 2. firebase store 
>     - 기존의 MySql대신 firebase store를 통해 사용자의 일정을 저장하도록 구현 
> 3. 소셜 로그인
>     - 구글, 카카오, 네이버 아이디를 사용해 로그인이 가능하도록 구현
> 4. 배포 변경
>     - 기존에 github page 배포에서 깃허브 push를 통해 자동으로 빌드 후 배포가 가능한 vercel 배포로 변경

  <h3>😄개발 인원</h3>
- 1인 개인 프로젝트

<h3>📓 서비스 화면</h3>

![My_ToDo-001](https://github.com/BaeDongWoo/ToDo-List/assets/114900672/7e13d634-913e-4d22-8241-d93e821ff52e)

<h3>프로젝트 상세</h3>
<h3>💡주요 기능</h3>

- 구글, 네이버, 카카오 sns로그인 
- 캘린더를 통해 사용자가 저장해 놓았던 할일 목록을 날짜별로 미리보기
- 캘린더의 날짜 선택시 해당 날짜의 할일 목록을 확인
- 선택한 날짜의 일정 목록을 수정

<h3>구현 상세</h3>

<h4>파일 구조</h4>

```bash
├── src
│   ├── components               
│     ├── common              
│     ├── config
|     ├── error
|     ├── firebasestore
|     ├── login
|       ├── social
|     ├── main
|       ├── calendar
|       ├── todolist
|     ├── reducer
|     └── signup
``` 

<h4>로그인</h4>
이메일 로그인과 sns로그인은 각각의 인증 서비스를 통해 인증을 받습니다.  

![image](https://github.com/BaeDongWoo/ToDo-List/assets/114900672/6610b843-fae2-41fb-94b4-8015dc92ba76)

이메일과 google -> firebase
카카오 -> 카카오 인증
네이버 -> 네이버 인증

<h4>Firebase Store</h4>

- 컬렉션 구조
 ```bash
├── users  - collection (유저 목록)
│   ├── uid - doc (회원가입한 유저의 uid)
│   	├── all_todo_list - collection (날짜별 할일 목록)
│   		├── date - doc (저장된 날짜)
│				├── todo_list <Array> - field (해당 날짜의 할일 목록)
│					├── todo_title <map-string> - field (제목)
│					├── todo_id <map-number> - field (번호)
│					└── todo_checked <map-boolean> - field (체크)

```

데이터를 조회하기 위한 uid는 회원가입한 유저에게 발급되는 uid를 사용합니다.
해당 유저의 all_todo_list 컬렉션에는 저장한 날짜를 고유 문서로 가지며,
저장된 날짜에는 todo_list 목록을 필드로 저장합니다.
 
<h4>상태관리(Redux Store)</h4>
사용자의 할일 목록을 전역에서 사용하기 위해 상태관리 라이브러리인 Redux Store를 사용합니다.

![image](https://github.com/BaeDongWoo/ToDo-List/assets/114900672/e4ce3cdc-8b20-41b3-a4be-1adeb338807c)
- 컴포넌트에서 Firebase Store에 데이터를 요청하고 응답 받은 데이터를 Redux Store에 저장합니다.
- 이후 컴포넌트에서 필요한 데이터를 Redux Store에 요청하고 스토어는 요청받은 데이터를 반환합니다.

<h4>캘린더</h4>

![image](https://github.com/BaeDongWoo/ToDo-List/assets/114900672/683281d4-660e-4f6a-ab45-25059ea8d6a0)

- 캘린더를 쉽게 구현할 수 있는 라이브러리가 있지만, 원하는 디자인과 캘린더의 각각 날짜에 해당하는 일정의 미리보기 기능을
  구현하기 위해 JavaScript의 Date()를 사용해 직접 구현
  
<h4>드래그 앤 드롭(react-beautiful-dnd)</h4>

- 사용자 경험 향상을 위해 리액트의 라이브러리인 react-beautiful-dnd를 사용
- 드래그를 통해 쉽게 목록 변경가능

<h4>배포</h4>

- Vercel을 통해 서비스를 배포 했습니다.

<h3>서비스 영상</h3>
<h4>신규 회원 가입</h4>

https://github.com/BaeDongWoo/ToDo-List/assets/114900672/ccc9783e-bd9a-41c7-b38b-98f33ebbbe8e

<h4>기존 사용자</h4>

https://github.com/BaeDongWoo/ToDo-List/assets/114900672/1c83734e-26f0-4515-a232-8eb4a9deba92
