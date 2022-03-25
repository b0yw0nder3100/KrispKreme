import React from 'react'
import Landingpage, { defaultstate } from '../Landingpage'
import { render, fireEvent, } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId;
beforeEach(() => {
    const utils = render(<Landingpage />)
    getByTestId = utils.getByTestId
})
