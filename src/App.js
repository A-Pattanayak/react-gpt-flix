import Body from './Body';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import Header from './Header';

function App() {
  return (
    <div className="App">
    <Provider store={appStore}>
      <Body />
    </Provider>
    </div>
  );
}
export default App;
