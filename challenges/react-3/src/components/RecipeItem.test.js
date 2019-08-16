import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import RecipeItem from './RecipeItem';

jest.mock('../services/recipes', () => ({
    getRecipesByName: jest.fn(async () => []),
    getRecipesByIngredients: jest.fn(async () => [])
}))

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const wrapper = mount(
            <MemoryRouter>
                <RecipeItem />
            </MemoryRouter>
        );
        expect(wrapper.exists('RecipeItem')).toBeTruthy();
    })
})