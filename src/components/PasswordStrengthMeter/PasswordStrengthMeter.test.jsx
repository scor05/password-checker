import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import PasswordStrengthMeter from './PasswordStrengthMeter.jsx'


describe('PasswordStrengthMeter', () => {
    it('renders a password input to type passwords in', () => {
        render(<PasswordStrengthMeter />)

        expect(screen.getByPlaceholderText(/contraseña123/i)).toBeInTheDocument()
    })

    it('shows a visual indicator for current password strength with initial value empty', () => {
        render(<PasswordStrengthMeter />)

        expect(screen.getByText(/Fortaleza de Contraseña: vacía/)).toBeInTheDocument()
    })

    it('shows empty rating for empty input', async () => {
        render(<PasswordStrengthMeter />)

        expect(screen.getByText(/Fortaleza de Contraseña: vacía/)).toBeInTheDocument()
    })

    it('shows weak rating for less than 8 characters', async () => {
        render(<PasswordStrengthMeter />)

        const input = screen.getByPlaceholderText(/contraseña123/i)
        await userEvent.type(input, 'testing')
        expect(screen.getByText(/Fortaleza de Contraseña: débil/)).toBeInTheDocument()
    })

    it('shows medium rating for 8+ chars when other criteria are not met', async () => {
        render(<PasswordStrengthMeter />)

        const input = screen.getByPlaceholderText(/contraseña123/i)
        await userEvent.type(input, 'thisisamediumpassword')
        expect(screen.getByText(/Fortaleza de Contraseña: media/)).toBeInTheDocument()
    })

    it('shows strong rating for 8+ chars and at least a number', async () => {
        render(<PasswordStrengthMeter />)

        const input = screen.getByPlaceholderText(/contraseña123/i)
        await userEvent.type(input, 'strong1234')
        expect(screen.getByText(/Fortaleza de Contraseña: fuerte/)).toBeInTheDocument()
    })

    it('shows very strong rating for 8+ chars, at least a number and a symbol', async () => {
        render(<PasswordStrengthMeter />)

        const input = screen.getByPlaceholderText(/contraseña123/i)
        await userEvent.type(input, 'strong1234@!')
        expect(screen.getByText(/Fortaleza de Contraseña: muy fuerte/)).toBeInTheDocument()
    })

    it('does not show weak for an 8 char password with no numbers or symbols', async () => {
        render(<PasswordStrengthMeter />)

        const input = screen.getByPlaceholderText(/contraseña123/i)
        await userEvent.type(input, 'abcdefgh')
        expect(screen.getByText(/Fortaleza de Contraseña: media/)).toBeInTheDocument()
    })

    it('shows weak for symbol-only and < 8 char passwords', async () => {
        render(<PasswordStrengthMeter />)

        const input = screen.getByPlaceholderText(/contraseña123/i)
        await userEvent.type(input, '@@@@!!!')
        expect(screen.getByText(/Fortaleza de Contraseña: débil/)).toBeInTheDocument()
    })
})
