import { useState, useEffect } from 'react'
import './PasswordStrengthMeter.css'
import evalPassword from './evalPassword.jsx'

const PasswordStrengthMeter = () => {
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const strength = evalPassword(password)
    const strengthClass = strength.replaceAll(' ', '-')

    useEffect(() => {
        evalPassword(password)
    }, [password])


    return (<div className='password-meter'>
        <p className="password-meter-guide">Ingresa tu contraseña</p>
        <div className="password-meter-input-div">
            <input
                className='password-meter-input'
                type={showPass ? 'text' : 'password'}
                placeholder='contraseña123...'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <button type="button" className="password-meter-visiblebtn" onClick={() => { setShowPass(!showPass) }}>
                {showPass ? '👁️‍🗨️' : '🫣'}
            </button>
        </div>
        <p className={`password-meter-label password-${strengthClass}`}>Fortaleza de Contraseña: {strength}</p>

    </div>)
}


export default PasswordStrengthMeter 
