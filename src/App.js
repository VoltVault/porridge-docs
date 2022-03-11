import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Doc from './components/Doc.js'
import Error404 from './components/404.js'
import DocError404 from './components/Doc404.js'

const App = () => {

  return (
		<Router>
			<Header />
			<Routes>
          <Route path='/' element={<Main />} />
          <Route path='/docs' element={<Doc />} />
          <Route path='/docs/*' element={<Doc />} />
          <Route path='/*' element={<Error404 />} />
			</Routes>
		</Router>
  );
}

export default App
