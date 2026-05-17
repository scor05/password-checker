const evalPassword = (pass) => {
    if (pass.length === 0) { return 'vacía' }
    if (pass.length < 8) {
        return 'débil'
    } else {
        // si sirve aprender regex
        const hasNumbers = /[0-9]/.test(pass)
        const hasSymbols = /[^a-zA-Z0-9]/.test(pass)
        if (!hasNumbers && !hasSymbols) {
            return 'media'
        } else if (hasNumbers && !hasSymbols) {
            return 'fuerte'
        } else { return 'muy fuerte' }
    }
}

export default evalPassword
