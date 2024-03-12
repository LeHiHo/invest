// import { useGetVideo } from "@hooks/useGetVideo";
import { useEffect, useState } from "react";
import axios from "axios";

const Brief = () => {
  // const videoId = 'ETyDOfnpSzg'; // 예시 videoId, 실제 videoId로 변경 필요
  // const { videoInfo } = useGetVideo(videoId);

  const [message, setMessage] = useState('');

  useEffect(() => {
    // API 호출
    axios.get('http://127.0.0.1:8000/hello')
      .then(response => {
        // 응답 데이터로 상태 업데이트
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시 단 한 번만 실행되게 함


  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Brief;