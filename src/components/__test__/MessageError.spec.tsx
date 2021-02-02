
import { render } from '@testing-library/react'

import { MessageError } from '../Form/errorrMessage'
describe('should be check the MessageError component', () => {
    test('render the MessageError  with props ', () => {
        let message="some test emaole"
         const {getByText}=render(<MessageError message={message}/>)      
         expect(getByText(message)).toEqual(message)
    })
    
    
})
