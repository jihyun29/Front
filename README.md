# Front Memo

## 초기 와이어 프레임

![](https://overjoyed-capacity-5a6.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F87c68b2e-0ee1-47d4-9a8b-66cc2cf19fc1%2Fdiagram-export-2023._5._13._%25EC%2598%25A4%25EC%25A0%2584_1_22_16_(%25EC%25A4%2591%25ED%2598%2595).png?id=f9991558-5a97-4bf0-a67b-d4dddb994d0a&table=block&spaceId=0ba460f2-75de-4aae-bdff-167ae7875c65&width=2000&userId=&cache=v2)

## 페이지 

### 메인 페이지
- 새 릴레이 동화 추가 (모달) 
  - 제목 인풋, 첫문장 인풋, 이미지 url 인풋, 저장 버튼 

### Sign-uo 페이지 
 - 간단한 회원 가입 기능 
 - 닉네임, 비밀번호를 입력 받아 회원가입 

 1. 닉네임은 영대소문자와 숫자만 입력 가능하며 최소 3글자 이상임을 체크하도록 구현
 2. 비밀번호는 최소 4글자 이상임을 체크하도록 구현
 3. 비밀번호 재입력 폼을 이용해 비밀번호를 올바르게 입력했는지 확인할 수 있도록 구현

1~3까지의 조건을 모두 만족할 경우 회원 가입 API 호출하여 회원가입 진행
조건 중 하나라도 불만족할 경우 API를 호출하지 않음 
조건 불만족시 사용자가 확인할 수 있도록 표시함

### Sign-in 페이지
- 닉네임과 비밀번호를 입력하여 로그인 진행
- 입력받은 값을 API로 전달한 후 결과를 전달 받음 
- 로그인 성공시 전달받은 토큰을 요청된 형식에 맞게 쿠키에 저장 
- 로그인 실페시 전달받은 메세지를 Alert으로 표시

### 상세 페이지 
- 메인 페이지로 돌아갈 버튼
- 완결 여부 체크
- 제목
- 릴레이되는 내용 
  - 모달? 작성자, 추천 버튼(count), 비추 버튼(count)
- 제가 써볼게요 버튼 
  - 글이 완결 상태일 경우 비활성화
  - 활성화 상태일때 버튼을 누르면 서버로 작성 중 상태 bool 값 전달
  - 버튼을 누른 후 5분 동안 저장하지 않으면 상태를 초기화 하고 화면을 리랜더링시킴
  - 버튼 클릭시 입력 화면 밑으로 표시되도록 함
- 입력 기능
  - 텍스트 인풋 글자수 제한 최소 글자수, 최대 글자수 제한 
  - 저장 버튼 
    - 저장 버튼 클릭시 작성 중 상태를 초기화 시키고 입력한 데이터를 서버에 저장함