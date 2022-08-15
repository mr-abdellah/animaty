import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CardItem from '../components/Card';

it(' Card renders properly', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <CardItem />
        </Provider>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
