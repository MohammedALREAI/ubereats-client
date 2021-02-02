import { render } from '@testing-library/react'
import React from 'react'
import { Button } from '../button'

describe('<Button/> render items', () => {
   
    it('should be loading button  ', () => {
        const {container,debug,getByText}=render(<Button canClick={true} loading={true} actionText="test" />);
        // check if the loding is true have the sme class
        expect(container.firstChild).toHaveClass('bg-lime-600 hover:bg-lime-700');
        getByText('Loading...')
        // expect().toHaveClass('bg-lime-600 hover:bg-lime-700');
      
    })
    
    
})
