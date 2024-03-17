import logo from './logo.svg';
import * as React from "react";
import { Outlet } from 'react-router-dom';
import SearchHeader from './component/SearchHeader';
import { useState, useEffect, useRef } from 'react';
import {  
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider, 
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return ( //children 요소가 Outlet 위치로 들어가는 것.
  //Search 영역은 위쪽 상단에 위치해야 한다.
    <>
      <SearchHeader/>
      <QueryClientProvider client={queryClient}>
        <Outlet/>
      </QueryClientProvider>

    </>
  );
}

export default App;
