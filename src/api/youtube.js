//실제 유튜브에서 네트워크통신을 하도록 구현한다.
//클래스를 만들어 구현할 것이다.
import axios from "axios";
export default async function search(keyword){
  return axios.get(`/videos/${keyword? 'search' : 'popular'}.json`)
  .then((res)=> res.data.items)
}