import logo from './logo.svg';
import * as React from "react";
import { Outlet } from 'react-router-dom';
import SearchHeader from './component/SearchHeader';


function App() {
  return ( //children 요소가 Outlet 위치로 들어가는 것.
  //Search 영역은 위쪽 상단에 위치해야 한다.
    <>
      <SearchHeader/>
      <Outlet/>
    </>
  );
}

export default App;
