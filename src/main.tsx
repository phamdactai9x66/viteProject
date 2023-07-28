import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

const cb = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}

const initConfig = () => {
  cb()
}

initConfig()
