import { describe, it, expect } from 'vitest'
import evalPassword from './evalPassword.jsx'

describe('evalPassword', () => {
    it('returns empty rating for empty input', () => {
        expect(evalPassword('')).toBe('vacía')
    })

    it('returns weak rating for less than 8 characters', () => {
        expect(evalPassword('testing')).toBe('débil')
    })

    it('returns medium rating for 8+ chars when other criteria are not met', () => {
        expect(evalPassword('thisisamediumpassword')).toBe('media')
    })

    it('returns strong rating for 8+ chars and at least a number', () => {
        expect(evalPassword('strong1234')).toBe('fuerte')
    })

    it('returns very strong rating for 8+ chars, at least a number and a symbol', () => {
        expect(evalPassword('strong1234@!')).toBe('muy fuerte')
    })

    it('does not return weak for an 8 char password with no numbers or symbols', () => {
        expect(evalPassword('abcdefgh')).toBe('media')
    })

    it('returns weak for symbol-only and < 8 char passwords', () => {
        expect(evalPassword('@@@@!!!')).toBe('débil')
    })
})
