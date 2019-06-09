import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Check this article to complete the testing file
// https://medium.com/selleo/testing-react-components-best-practices-2f77ac302d12
// and this https://reactjs.org/docs/test-utils.html
describe('Website', function() {
  describe('Render', function() {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      
    });
  });
});
