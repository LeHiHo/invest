import { useGetVideo } from "@hooks/useGetVideo";

const Brief = () => {
  const videoId = 'ETyDOfnpSzg'; // 예시 videoId, 실제 videoId로 변경 필요
  const { videoInfo } = useGetVideo(videoId);

  console.log(videoInfo)

  return (
    <>
      <div>{videoInfo?.title}</div>
      <div>{videoInfo?.publishedAt}</div>
      <img src={videoInfo?.thumbnailUrl}/>     

      <div>{videoInfo?.description}</div>

    </>
  );
};

export default Brief;