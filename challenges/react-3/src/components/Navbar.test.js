import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar';

jest.mock('../services/recipes', () => ({
    getRecipesByName: jest.fn(async () => []),
    getRecipesByIngredients: jest.fn(async () => [])
}))

describe('Navbar', () => {
    test('Should be App', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(wrapper.exists('Navbar')).toBeTruthy();
    })
})