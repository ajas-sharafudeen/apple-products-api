const express = require('express')
const app = express()
const port = process.env.port || 4000

let devices = {
  'mac mini': {
    'Processor': 'Apple M2 chip',
    'CPU': '8 core',
    'GPU': '10 core',
    'RAM': '8-24GB',
    'Storage': '256GB-2TB',
    'Ports': '2x Thunderbolt/USB 4, HDMI, 2x USB-A, Ethernet (up to 10GB), 3.5mm headphone jack',
    'Connectivity': 'Wi-Fi 6E, Bluetooth 5.3',
    'Dimensions': '7.7 x 7.7 x 1.4 inches',
    'Weight': '2.6 pounds',
    'Price': '$599 - $799'
  },
  'unknown': {
    'devices': 'not found'
  }

}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
  const deviceName = req.params.name.toLowerCase()
  if (devices[deviceName]) {
    res.json(devices[deviceName])
  } else {
    res.json(devices['unknown'])
  }
})

app.listen(port, () => {
  console.log('server listening on port 4000');
})