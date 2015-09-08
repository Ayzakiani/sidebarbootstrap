(function() {
          angular.module('mylinkApp')

            .service('userService', function(){
                               
				 var userService = {
                    user: {
                            'firstname': '',
                            'lastname': '',
                            'email': '',
                            'username': '',
                             'password': ''
                          },
                                  getUser: function() {
                                      return userService.user;
                                  },
                                  getUserFirstname: function() {
                                      return userService.user.Firstname;
                                  },
                                  getUserLastname: function() {
                                      return userService.user.Lastname;
                                  },
                                  getUserUsername: function() {
                                      return userService.user.Username;
                                  },

                                  getUserEmail: function() {
                                      return userService.user.Email;
                                  },
                                  getUserPassword: function() {
                                      return userService.user.Password;
                                  },
                                  setUserFirstname: function(firstname) {
                                      userService.user.Firstname = firstname;
                                  },
                                  setUserLastname: function(lastname) {
                                      userService.user.Lastname = lastname;
                                  },
                                  setUserUsername: function(username) {
                                      userService.user.Username = username;
                                  },
                                  setUserEmail: function(email) {
                                      userService.user.Email = email;
                                  },
                                  setUserPassword: function(password) {
                                      userService.user.Password = password;
                                  },

                              };
                              return userService;
                        });

               
       })();