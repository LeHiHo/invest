import { useQuery } from '@tanstack/react-query';
import fetchVideoInfo from '@api/videoInfo';

// React Query를 사용하여 동영상 정보를 가져오는 커스텀 훅
export const useGetVideo = (videoId: string) => {
  const { data, isLoading, isError } = useQuery<VideoInfo, Error>({
    queryKey: ['getVideo', videoId], // videoId를 queryKey에 추가하여 캐싱 정책을 개선
    queryFn: () => fetchVideoInfo(videoId),
  });

  if (isLoading || isError) {
    return { data: [] };
  }

  // isLoading과 isError 상태에 따른 처리는 호출하는 컴포넌트에서 수행
  return { videoInfo: data };
};