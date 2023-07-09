/* eslint-disable no-undef */
const app = require('./app')

const PORT = 3333 | process.env.PORT

app.listen(PORT, () => {
  console.log('Server Ruming')
})