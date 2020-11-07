import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { initialMock } from '../components/List/__tests__/List.test.jsx'
import { GET_TODO } from "../apollo/queries"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../redux/reducers'

const mock = [
  initialMock,
  {
    request: {
      query: GET_TODO,
      variables: {
	id: "1"
      }
    },
    result: {
      data: {
	todo: {
	  id: "1",
	  title: "todo1",
	  description: "desc",
	  status: "ACTIVE",
	  priority: "NORMAL",
	  created: "today"
	}
      }
    }
  }
];

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return(
	    <MockedProvider mocks={mock} addTypename={false}>
	    <Provider store={store}>{children}</Provider></MockedProvider>)
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
