import React from 'react'
import TimeSlot from './timeSlot'
import { render } from '@testing-library/react';

beforeEach(() => {
  return render(<TimeSlot name="Jojo" color="orange" hrs={24}/>)
});
// No need to remove renders that add to dom. It's done every time if testing framework supports aftereach.
test('component and props are registered in dom', () => {
  expect(document.body.firstChild.textContent).toContain('Jojo  hrs: 24')
  expect(document.body.firstChild.firstChild.style.backgroundColor).toEqual('orange')
})
