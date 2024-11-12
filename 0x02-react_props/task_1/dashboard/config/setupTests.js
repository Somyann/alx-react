
import '@testing-library/jest-dom';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});
