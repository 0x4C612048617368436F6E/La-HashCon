import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react'

import Page from '@/app/page'

describe("Home Page",()=>{
    it("Render a heading",()=>{
        render(<Page />)
        const heading = screen.getByRole('title1')

        expect(heading).toBeInTheDocument()
    })
})