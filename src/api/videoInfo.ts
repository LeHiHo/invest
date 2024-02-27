import axios from 'axios';

// YouTube Data API에서 동영상 정보를 가져오는 함수
const fetchVideoInfo = async (videoId: string) => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // 환경 변수에서 API 키 가져오기
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,statistics`;

  const response = await axios.get(url);
  const videoData = response.data.items[0]; // API 응답에서 첫 번째 동영상 정보 추출

  // API 응답에서 필요한 정보만 추출하여 반환
  return {
    videoId: videoData.id,
    title: videoData.snippet.title,
    description: videoData.snippet.description,
    publishedAt: videoData.snippet.publishedAt,
    thumbnailUrl: videoData.snippet.thumbnails.high.url,
    viewCount: videoData.statistics.viewCount,
  };
};

export default fetchVideoInfo