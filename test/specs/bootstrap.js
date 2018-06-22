import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

before(function () {
  Enzyme.configure({ adapter: new Adapter() });
});
