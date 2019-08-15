import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

const getUser = name => {
  return name ? name : "React";
};

describe("User", () => {
  it("deve retornar meu nome", () => {
    const resultado = getUser();
    expect(resultado).toBe("React");
  });

  it("deve retornar o nome Escale", () => {
    const resultado = getUser("Escale");
    expect(resultado).toBe("Escale");
  });

  it("deve retornar o nome Codenation", () => {
    const resultado = getUser("Codenation");
    expect(resultado).toBe("Codenation");
  });
});

/* describe('App', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      isFetching: false,
      dispatch: jest.fn(),
      selectedSubreddit: 'reactjs',
      posts: []
    }
    const wrapper = shallow(<App {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

it('handleRefreshClick dispatches the correct actions', () => {
    const props = {
      isFetching: false,
      dispatch: jest.fn(),
      selectedSubreddit: 'reactjs',
      posts: []
    }
    // Mock event to be passed to the handleRefreshClick function
    const mockEvent = {
      preventDefault: jest.fn()
    }
    // Mock the actions we expect to be called
    actions.invalidateSubreddit = jest.fn();
    actions.fetchPostsIfNeeded = jest.fn();
    
    const wrapper = shallow(<App {...props} />)
    // Call the function on the component instance, passing the mock event
    wrapper.instance().handleRefreshClick(mockEvent);
      
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(props.dispatch.mock.calls.length).toBe(3);
    expect(actions.invalidateSubreddit.mock.calls.length).toBe(1);
    expect(actions.fetchPostsIfNeeded.mock.calls.length).toBe(2);
  })

*/
