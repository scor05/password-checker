import { useState, useEffect } from 'react'
import './PasswordStrengthMeter.css'
import evalPassword from './evalPassword.jsx'

const PasswordStrengthMeter = () => {
    const [password, setPassword] = useState('')
    const strength = evalPassword(password)
    const strengthClass = strength.replaceAll(' ', '-')

    useEffect(() => {
        evalPassword(password)
    }, [password])


    return (<div className='password-meter'>
        <p className="password-meter-guide">Ingresa tu contraseña</p>
        <input
            className='password-meter-input'
            type='password'
            placeholder='contraseña123...'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
        />
        <p className={`password-meter-label password-${strengthClass}`}>Fortaleza de Contraseña: {strength}</p>

    </div>)
}


export default PasswordStrengthMeter 
