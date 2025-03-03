# 🎤  K-pop 엔터테인먼트 프로토타입 홈페이지  
>K-문화를 선도하는 K-pop. 이에 어울리는 Art 느낌의 사이트 제작  
>아티스트와 함께 찍은 사진을 저장할 수 있는 서비스  
>https://623465b8ffb0001ab27c9a07--entertainment-desing.netlify.app/info

<details>
<summary><b>URL클릭하기 전, 주의사항 펼쳐보기</b></summary>
<div markdown="1">

- 위의 URL은 netlify를 사용한 '임시URL'
- 만약 아래와 같은 Page Not Found Modal이 나오면? 'Back to our site'를 누르면 정상 동작
![image](https://user-images.githubusercontent.com/70943889/158994427-b8f3ea43-fa0a-4d22-b7ba-b0cecd7ed6a2.png)

</div>
</details>

</br>

## 1. 제작 기간 & 참여 인원
- 2022년 03월 07일 ~ 03월 15일(9일)
- 개인 프로젝트

</br>

## 2. 기술 스택
#### `Front-end`
  - HTML
  - PostCSS
  - JavaScript/JSX
  - React.js
### `ETC`
  - Firebase
  - YouTube API

</br>

## 3. 사이트맵

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/entertainment-sitemap.png" width="100%" height="100%" />

## 4. 핵심 기능
  - main.jsx 에서 YouTube API 사용, 자동으로 음악 재생  
  - 재사용 가능한 Modal 컴포넌트  
  - Firebase 사용한 Google, GitHub 로그인  
  - Firebase 사용한 실시간 데이터베이스  

<details>
<summary><b>핵심 기능 설명 펼쳐보기</b></summary>
<div markdown="1">

### 4.1 main.jsx 에서 YouTube API 사용, 자동으로 음악 재생  

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/api-autoplay.png" width="100%" height="100%" />
  
- **'autoplay=1', allow='autoplay' 자동으로 음악 재생되도록 [참고자료](https://www.outsystems.com/forums/discussion/66950/autoplay-an-embeded-youtube-video-in-reactive-web-app/)보며 처리** 🔎 [코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/main/main.jsx#L15)
  - default 음악은 BTS로 설정해놓았습니다.

### 4.2 재사용 가능한 Modal 컴포넌트  

- **재사용 가능한 Modal 컴포넌트를 만든 후, 필요한 4개 컴포넌트에 재사용** 🔎 [코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/modal/modal.jsx#L5)
  - Modal이 필요한 각 컴포넌트에 name을 변수로 만들고, 재사용할 수 있는 Modal로 값을 전달하도록 구현하였습니다.

### 4.3 Firebase 사용한 Google, GitHub 로그인  
 
<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/login-service.png" width="100%" height="100%" />  

- **AuthService class 생성, 구조화** 🔎 [auth_service.js 코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/service/auth_service.js#L4) & [login.jsx 코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/login/login.jsx#L5)
  - Firebase와 네트워크 통신할 때, class를 따로 만들어 이후 확장성과 유지보수가 용이하도록 구현했습니다.
  - 로그인 인증 시, Google과 GitHub은 같은 함수를 사용하므로 재사용할 수 있게 구현했습니다.

### 4.4 Firebase 사용한 실시간 데이터베이스  

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/fileInput-service.png" width="100%" height="100%" />  

- **추가, 삭제, 수정 기능** 🔎 [card_repository.js 코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/service/card_repository.js#L5) & [maker.jsx 코드 확인](https://github.com/luckyjek/entertainment-design/blob/main/src/components/maker/maker.jsx#L8)
  - 카드의 추가, 삭제, 수정 기능을 공통으로 사용하는 하위 컴포넌트들에 props 전달을 위해 함수는 Maker 컴포넌트에 정의하였습니다.

</div>
</details>

</br>

## 5. 핵심 트러블 슈팅
### 5.1 라우터 v5, 컴포넌트 전달 시 문제

<img src="https://github.com/luckyjek/entertainment-design/blob/main/public/images/portfolio/router-error.png" width="100%" height="100%" />

- 우선, 이 프로젝트에서는 라우터 v5를 사용하였습니다. 그 이유는 [이전 클론 코딩을 하면서 v6 을 사용](https://github.com/luckyjek/card-maker/blob/main/src/app.jsx#L9)해봤기 때문입니다.  
- [React Router를 참고하여](https://reactrouter.com/docs/en/v6/upgrading/v5) 처음 path 설정할 때, 가독성을 높이기 위해 아래 `기존 코드` 와 같이 설정하였습니다.  

<details>
<summary><b>기존 코드</b></summary>
<div markdown="1">

~~~js
<Route path='/info' FileInput={FileInput} component={Maker} />
~~~

</div>
</details>

- error의 원인은 지금 생각하면 너무도 당연하지만, 해결하는 그때는 왜 안되는지 이해가 안 돼서 [비슷한 error를 해결한 블로그를 참고하여](https://karzin.tistory.com/242) FileInput 컴포넌트를 사용하는 CardAddForm 컴포넌트까지 주석을 하나하나 해가며 원인을 찾았습니다.  
- 원인은 라우터 설정에 있었습니다. 즉, `app·jsx`에서 라우터 설정을 하게 될 때 `기존 코드`와 같은 방식은 Maker 컴포넌트로 값이 전달되지 못하고 <Route />안으로 전달되는 것을 깨달았습니다.   
- 이에 원인을 찾고 다시 라우터 설정을 해주기 위해 [React Router를 참고하여](https://reactrouter.com/docs/en/v6/upgrading/v5), `개선된 코드`와 같이 변경해주었습니다.

<details>
<summary><b>개선된 코드</b></summary>
<div markdown="1">

~~~js
<Route path='/maker'>
  <Maker  
    FileInput={FileInput} 
    authService={authService}
    cardRepository={cardRepository}
  />
</Route>
~~~

</div>
</details>

</br>

## 6. 회고 / 느낀점
>Entertainment Design 프로젝트를 진행하면서 처음 사용하는 React.js의 개념을 이해하는데 있어 [이전에 만든 랜딩페이지](https://github.com/luckyjek/cafe898-8)가 토대가 되어 많은 도움이 되었습니다. 
>이에 어떤 일이든지 기본이 가장 중요하다는 것을 다시 한번 깨달을 수 있었던 프로젝트였습니다.  
>
>Entertainment Design 프로젝트는 `드림 코딩의 React` 강의를 들으며 전체적인 React.js 개념을 이해하고, 응용하였습니다.  
>물론 처음 React.js를 사용하며 개념을 이해하면서 구현하는 것은 어려웠지만, `팀`이 아닌 `개인`으로 기능을 하나하나 구현해나가는 성취감은 더 배가 된 프로젝트였습니다.
