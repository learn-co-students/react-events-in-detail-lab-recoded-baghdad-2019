const React = require('react');
const { shallow } = require('enzyme');
const sinon = require('sinon');

const CoordinatesButton = require('../components/CoordinatesButton');
const DelayedButton = require('../components/DelayedButton');

const MOCKED_EVENT = {
  clientX: 5,
  clientY: 5,
  screenX: 5,
  screenY: 5,
  pageX: 5,
  pageY: 5,
  persist: sinon.spy()
};

const DELAY = 50;

describe('<CoordinatesButton />', function () {
  const spy = sinon.spy();
  const wrapper = shallow(<CoordinatesButton onReceiveCoordinates={spy} />);

  afterEach(function () {
    spy.reset();
  });

  it('should have one button', function () {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should call the callback prop when the button is clicked', function () {
    wrapper.find('button').simulate('click', MOCKED_EVENT);
    expect(spy.firstCall.args[0]).toBeAn('array');
  });

  it('should pass the right coordinates to the callback prop', function () {
    wrapper.find('button').simulate('click', MOCKED_EVENT);
    expect(spy.firstCall.args[0]).toEqual([5, 5]);
  });
});

describe('<DelayedButton />', function () {
  const spy = sinon.spy();
  const wrapper = shallow(<DelayedButton onDelayedClick={spy} delay={DELAY} />);

  afterEach(function () {
    spy.reset();
    MOCKED_EVENT.persist.reset();
  });

  it('should have one button', function () {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should call the callback prop after the delay', function (done) {
    wrapper.find('button').simulate('click', MOCKED_EVENT);
    setTimeout(() => {
      expect(spy.calledOnce).toBeTruthy('The `onDelayedClick` prop was not called after the delay.');
      done();
    }, DELAY + 1);
  });

  it('should pass the event to the callback prop', function (done) {
    wrapper.find('button').simulate('click', MOCKED_EVENT);
    setTimeout(() => {
      expect(MOCKED_EVENT.persist.calledOnce).toBeTruthy('The event passed to the callback prop is being pooled');
      expect(spy.firstCall.args[0]).toEqual(MOCKED_EVENT, 'The event is not being passed to the callback prop.');
      done();
    }, DELAY + 1);
  });
});
