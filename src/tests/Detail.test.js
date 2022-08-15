import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Detail from '../components/Detail';

it(' Detail page renders properly', () => {
  const tree = renderer.create(
    <Router>
      <Provider store={store}>
        <Detail />
      </Provider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
