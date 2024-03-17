import { useParams } from "react-router-dom"
import {  
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider, 
} from '@tanstack/react-query';
import VideoCard from "../component/VideoCard";

import search from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

export default function Videos(){
  const { keyword } = useParams();
  const {isLoading, error, data:videos} = useQuery({
    queryKey :['videos', keyword], 
    queryFn : ()=>{
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    }
  });

  return(
    <>
      <div>Videos {keyword ? `🔎${keyword}` : '🔥' }</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong🙄</p> }
      {videos && <ul>
        {videos.map((video)=>(
          <VideoCard key={video.id} video={video}/>
        ))}
        </ul>}
    </>
  )

}
