const authConfig = {
  token: { 
    expiresIn: 10 
  },
  cookie: {
    maxAge: 5000,
    httpOnly: true
  }
}

export default authConfig