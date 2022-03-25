import React from 'react'
import Landingpage, { defaultstates } from '../Landingpage'
import { render, fireEvent, } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

let getByTestId;
beforeEach(() => {
    const utils = render(<Landingpage />)
    getByTestId = utils.getByTestId
})

describe('When the page renders', () => {
    it('The image and price rendered should have an index of zero', () => {
        const priceEl = getByTestId('donutpack-price')
        const imageEl = getByTestId('donutpack-image')

        expect(imageEl.src).toContain(defaultstates.donuts[0].img)
        expect(priceEl.textContent).toEqual("₦" + defaultstates.donuts[0].price)
    })

    it('Initial count state should be zero', () => {
        expect(defaultstates.count).toEqual(0)
    })
})

describe('When the + button is click', () => {
    it('The next image and price shoul be rendered', () => {
        const priceEl = getByTestId('donutpack-price')
        const imageEl = getByTestId('donutpack-image')
        const btnEl = getByTestId('next-btn')

        fireEvent.click(btnEl)
        expect(imageEl.src).toContain(defaultstates.donuts[1].img)
        expect(priceEl.textContent).toEqual("₦" + defaultstates.donuts[1].price)
    })
})