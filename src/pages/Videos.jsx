import { useParams } from "react-router-dom"
import {  
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider, 
} from '@tanstack/react-query';
import VideoCard from "../component/VideoCard";

export default function Videos(){
  const { keyword } = useParams();
  const {isLoading, error, data:videos} = useQuery({
    queryKey :['videos', keyword], 
    queryFn : async ()=>{
      return fetch(`/videos/${keyword? 'search' : 'popular'}.json`)
      .then(res => res.json())
      .then(data => data.items);
    }
  });

  return(
    <>
      <div>Videos {keyword ? `🔎${keyword}` : '🔥' }</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong🙄</p> }
      {videos && <ul>
        {videos.map((video)=>(
          <VideoCard key={keyword ? video.id.videoId :video.id} video={video}/>
        ))}
        </ul>}
    </>
  )

}
