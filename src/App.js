import './App.css';
import { BrowserRouter} from "react-router-dom";
import Router from "./navigation/Router";
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#F2E7D5',
              fontFamily: 'Khula',
              fontSize: '14px',
            },
          }}
        >
        <div className="App">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
