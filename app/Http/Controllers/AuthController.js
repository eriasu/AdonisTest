'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class AuthController {

    * index(request, response) {
        yield response.sendView('login')
    }

    * login(request, response) {
        const email = request.input('email')
        const password = request.input('password')

        const login = yield request.auth.attempt(email,password)
        if(login){
          response.send('Logged In')
          return
        }
        response.unauthorized('Invalid Credentails')

    }

    * logout(request, response) {
        yield request.auth.logout()

        return response.redirect('/')
    }
}

module.exports = AuthController
