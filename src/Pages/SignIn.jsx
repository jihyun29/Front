import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthApi } from "../shared/Api";

function SignIn() {
  const [nickName, setNickName] = useState({
    value: "",
    err: null,
  });
  const [password, setPassword] = useState({
    value: "",
    err: null,
  });

  const onNickNameChangeHandler = (event) => {
    const inputNickName = event.target.value;
    setNickName((prevNickName) => ({
      ...prevNickName,
      value: inputNickName,
    }));
  };

  const onPasswordChangeHandler = (event) => {
    const inputPassword = event.target.value;
    setPassword((prevPassword) => ({
      ...prevPassword,
      value: inputPassword,
    }));
  };

  const onSubmitHandler = async() => {
  if(nickName.value && password.value) {
    alert("로그인 !!")

    try {
      const res = await AuthApi.signin({nickname:nickName.value, password:password.value})
      console.log(res)  
    } catch (err) {
      console.log(err)
    }

    // axios
    //     .post(
    //       "http://miniproject.ap-northeast-2.elasticbeanstalk.com/signin", // 미리 약속한 주소
    //       { nickname:nickName.value, password:password.value }, // 서버가 필요로 하는 데이터를 넘겨주고,
    //       { headers: {} } // 누가 요청했는 지 알려줍니다. (config에서 해요!)
    //     )
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
  } else {
    alert("닉네임 또는 비밀번호가 입력되지 않았습니다.")
    return;
  }

    
  }
  return (
    <StContiner>
      <h1>로그인</h1>
      <label>Nickname</label>
      <input
        type="text"
        value={nickName.value}
        placeholder="Type your Nickname"
        onChange={onNickNameChangeHandler}
      />
      <label>비밀번호</label>
      <input
        type="password"
        value={password.value}
        placeholder="Type your Password"
        onChange={onPasswordChangeHandler}
      />
      <div>
        <StBtn type="submit" onClick={onSubmitHandler}>로그인</StBtn>
        <Link to={"/signup"}>
          <StBtn type="button">회원가입</StBtn>
        </Link>
        <Link to={"/"}>
          <StBtn type="button">뒤로가기</StBtn>
        </Link>
      </div>
    </StContiner>
  );
}
export default SignIn;

const StContiner = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;

  border: 3px solid black;
`;

const StBtn = styled.button`
  margin: 5px;
`;
