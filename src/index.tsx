import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyled from 'styles/global.style';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
        <GlobalStyled />
        <ToastContainer
          autoClose={2000}
          limit={5}
          pauseOnHover={false}
          position="top-right"
          pauseOnFocusLoss={false}
        />
      </QueryClientProvider>
    </RecoilRoot>
  </BrowserRouter>,
);
