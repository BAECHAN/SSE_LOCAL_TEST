import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // Express 서버의 API 엔드포인트로 GET 요청을 보냅니다.
    fetch("http://localhost:8090/api/hello") // 절대 경로 사용
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message); // 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Express 통합 예제</h1>
        <p>서버로부터 받은 메시지: {message}</p>
      </header>
    </div>
  );
}

export default App;
