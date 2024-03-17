import axios from "axios";
/*
export default async function search(keyword){
  return axios.get(`/videos/${keyword? 'search' : 'popular'}.json`)
  .then((res)=> res.data.items)
}*/

export default class FakeYoutube {
  constructor(){}

  async search(keyword){
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  } 
  //popular와 search json 데이터에서 보면 id부분이 조금 달랐다.
  //popular는 id가 그대로, search는 id가 object 형태였다.

  async #searchByKeyword(keyword){ 
    return axios
    .get(`/videos/search.json`)
    .then((res)=> res.data.items)
    .then(items => items.map(item => ({...item, id: item.id.videoId})));
  }

  async #mostPopular(){ 
    return axios
    .get(`/videos/popular.json`)
    .then((res)=> res.data.items);
  }
}