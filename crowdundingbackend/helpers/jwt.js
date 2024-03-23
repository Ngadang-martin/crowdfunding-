const jwt = require('jsonwebtoken')

exports.decode = (authorisation) => {
    const token = authorisation != null ? authorisation.replace('Bearer ','') : null
    let account = null
    if (token != null) {
        try {
            account = jwt.verify(token, 'privatekey')
        } catch (error) {
            
        }
    }
    return account
}

exports.createToken = (account , expiresIn ) => {
    expiresIn = expiresIn || '1h'

    return jwt.sign({
        id: account.id
    }, 'privatekey', {expiresIn})
}