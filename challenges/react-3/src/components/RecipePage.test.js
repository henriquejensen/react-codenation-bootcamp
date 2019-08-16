import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import RecipePage from './RecipePage';

jest.mock('../services/recipes', () => ({
    getRecipesByName: jest.fn(async () => []),
    getRecipesByIngredients: jest.fn(async () => [])
}))

describe('RecipePage', () => {
    test('Should be RecipePage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <RecipePage />
            </MemoryRouter>
        );
        expect(wrapper.exists('RecipePage')).toBeTruthy();
    })
})