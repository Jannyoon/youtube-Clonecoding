import { useParams } from "react-router-dom"

export default function VideoDetail(){
  const params = useParams();
  const videoId = params.videoId;
  console.log(videoId);
  return <>Videos🔎{videoId}</>
}