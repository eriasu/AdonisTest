'use strict'

class HomeController {
  * show(request, response){
    yield response.sendView('home')
  }
}

module.exports = HomeController
