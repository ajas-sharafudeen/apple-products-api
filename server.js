const express = require('express')
const app = express()
const port = process.env.port || 4000

let devices = {
  'mac mini': {
    'Processor': 'Apple M2/M2 Pro',
    'CPU': '8 core - 12 core',
    'GPU': '10 core - 19 core',
    'RAM': '8GB - 32GB',
    'Storage': '256GB - 8TB',
    'Ports': 'Thunderbolt 4, USB 4, HDMI, 2x USB-A, Ethernet (up to 10GB), 3.5mm headphone jack',
    'Connectivity': 'Wi-Fi 6/6E, Bluetooth 5/5.3',
    'Dimensions': '7.7 x 7.7 x 1.4 inches',
    'Weight': '2.6 pounds',
    'Price': '$599 - $1,299',
    'Release': '2023'
  },
  'macbook pro': {
    'Processor': 'Apple M3/M3 Pro/M3 Max',
    'CPU': '8 core - 16 core',
    'GPU': '10 core - 40 core',
    'RAM': '8GB - 128GB',
    'Storage': '512GB - 8TB',
    'Ports': 'Thunderbolt 3/4, USB 4, DisplayPort, SDXC card slot, HDMI port, 3.5mm headphone jack, MagSafe 3 port',
    'Connectivity': 'Wi-Fi 6E, Bluetooth 5.3',
    'Dimensions': '0.61 x 12.31 x 8.71 inches',
    'Weight': '3.4 - 3.6 pounds',
    'Price': '$1,599 - $3,199',
    'Release': '2023'
  },
  'macbook air': {
    'Processor': 'Apple M2/M3',
    'CPU': '8 core',
    'GPU': '10 core',
    'RAM': '8GB - 24GB',
    'Storage': '256GB - 2TB',
    'Ports': 'Thunderbolt 3, USB 4, DisplayPort, 3.5mm headphone jack, MagSafe 3 port',
    'Connectivity': 'Wi-Fi 6/6E, Bluetooth 5.3',
    'Dimensions': '0.44 x 11.97 x 8.46 inches',
    'Weight': '2.7 pounds',
    'Price': '$999 - $1,499',
    'Release': '2022/2023'
  },
  'imac': {
    'Processor': 'Apple M3',
    'CPU': '8 core',
    'GPU': '8 - 10 core',
    'RAM': '8GB - 24GB',
    'Storage': '256GB - 2TB',
    'Ports': 'Thunderbolt 3, USB 3/3.1 Gen 2/USB 4, DisplayPort, Gigabit Ethernet',
    'Connectivity': 'Wi-Fi 6E, Bluetooth 5.3',
    'Dimensions': '0.44 x 11.97 x 8.46 inches',
    'Weight': '9.75 - 9.87 pounds',
    'Price': '$1,299 - $1,699',
    'Release': '2023'
  },
  'mac studio': {
    'Processor': 'Apple M2 Max/M2 Ultra',
    'CPU': '12 - 24 core',
    'GPU': '30 - 76 core',
    'RAM': '32GB - 192GB',
    'Storage': '512GB - 8TB',
    'Ports': 'Thunderbolt 4, USB 3.1 Gen 2/USB 4, USB-A, SDXC card slot (UHS-II), DisplayPort, HDMI Port, Gigabit Ethernet, 3.5mm headphone jack',
    'Connectivity': 'Wi-Fi 6E, Bluetooth 5.3',
    'Dimensions': '3.7 x 7.7 x 7.7 inches',
    'Weight': '5.9 - 7.9 pounds',
    'Price': '$1,999 - $3,999',
    'Release': '2023'
  },
  'mac pro': {
    'Processor': 'Apple M2 Ultra',
    'CPU': '24 core',
    'GPU': '60 - 76 core',
    'Neural Engine': '32 core',
    'RAM': '64GB - 192GB',
    'Storage': '1TB - 8TB',
    'Ports': 'Thunderbolt 4, USB 3.1 Gen 2/USB 4, USB-A, Serial ATA ports, DisplayPort, HDMI Port, 10Gb Ethernet, 3.5mm headphone jack',
    'Connectivity': 'Wi-Fi 6E, Bluetooth 5.3',
    'Weight': '37.2 - 37.9 pounds',
    'Price': '$6,999 - $12,448',
    'Release': '2023'
  },
  'iphone 15': {
    'Processor': 'A16 Bionic',
    'CPU': '6 core',
    'GPU': '5 core',
    'Neural Engine': '16 core',
    'Storage': '128GB - 512GB',
    'Display': '6.1-inch OLED Super Retina XDR display',
    'Build Material': 'Aluminium with color-infused glass back',
    'SIM Card': 'Dual eSIM, no physical SIM',
    'Front Camera': '12MP Photos, 4K video recording uptp 60fps, 1080p HD upto 60fps',
    'Rear Camera': 'Advanced dual-camera system - 48MP Main | 12MP Ultra Wide',
    'Optical Zoom': '.5x, 1x, 2x',
    'Video Recording': 'HDR video recording with Dolby Vision upto 4K video recording at 60 fps, 4K video recording upto 60 fps, 1080p HD upto 60fps',
    'Video Playback': 'HDR with Dolby Vision, HDR10, and HLG',
    'Cellular Connectivity': '5G (sub-6 GHz and mmWave), Gigabit LTE, DC-HSDPA, UMTS/HSPA+, GSM/EDGE',
    'Wireless Connectivity': 'Wi-Fi 6, Bluetooth 5.3, NFC, GPS, GLONASS, Galileo, QZSS, and BeiDou',
    'Sensors': 'High dynamic range gyro, High-g accelerometer, Proximity sensor, Dual ambient light sensors, Barometer',
    'Price': '$799 - $1,099',
    'Release': '2023'
  },
  'iphone 15 pro': {
    'Processor': 'A17 Pro',
    'CPU': '6 core',
    'GPU': '6 core',
    'Neural Engine': '16 core',
    'Storage': '128GB - 1TB',
    'Display': '6.1-inch OLED Super Retina XDR display with ProMotion Technology',
    'Build Material': 'Titanium with textured matte glass back',
    'SIM Card': 'Dual eSIM, no physical SIM',
    'Front Camera': '12MP Photos, 4K video recording uptp 60fps, 1080p HD upto 60fps',
    'Rear Camera': 'Pro camera system - 48MP Main | 12MP Ultra Wide | 12MP Telephoto',
    'Optical Zoom': '.5x, 1x, 2x, 3x',
    'Video Recording': 'ProRes video recording up to 4K at 60 fps with external recording, HDR with Dolby Vision up to 4K at 60fps',
    'Video Playback': 'HDR with Dolby Vision, HDR10, and HLG',
    'Cellular Connectivity': '5G (sub-6 GHz and mmWave), Gigabit LTE, DC-HSDPA, UMTS/HSPA+, GSM/EDGE',
    'Wireless Connectivity': 'Wi-Fi 6E, Bluetooth 5.3, NFC, Precision dual-frequency (GPS, GLONASS, Galileo, QZSS, BeiDou and NavIC)',
    'Sensors': 'LiDar Scanner, High dynamic range gyro, High-g accelerometer, Proximity sensor, Dual ambient light sensors, Barometer',
    'Price': '$999 - $1,499',
    'Release': '2023'
  },
  'iphone 15 pro max': {
    'Processor': 'A17 Pro',
    'CPU': '6 core',
    'GPU': '6 core',
    'Neural Engine': '16 core',
    'Storage': '128GB - 1TB',
    'Display': '6.7-inch OLED Super Retina XDR display with ProMotion Technology',
    'Build Material': 'Titanium with textured matte glass back',
    'SIM Card': 'Dual eSIM, no physical SIM',
    'Front Camera': '12MP Photos, 4K video recording uptp 60fps, 1080p HD upto 60fps',
    'Rear Camera': 'Pro camera system - 48MP Main | 12MP Ultra Wide | 12MP Telephoto',
    'Optical Zoom': '.5x, 1x, 2x, 5x',
    'Video Recording': 'ProRes video recording up to 4K at 60 fps with external recording, HDR with Dolby Vision up to 4K at 60fps',
    'Video Playback': 'HDR with Dolby Vision, HDR10, and HLG',
    'Cellular Connectivity': '5G (sub-6 GHz and mmWave), Gigabit LTE, DC-HSDPA, UMTS/HSPA+, GSM/EDGE',
    'Wireless Connectivity': 'Wi-Fi 6E, Bluetooth 5.3, NFC, Precision dual-frequency (GPS, GLONASS, Galileo, QZSS, BeiDou and NavIC)',
    'Sensors': 'LiDar Scanner, High dynamic range gyro, High-g accelerometer, Proximity sensor, Dual ambient light sensors, Barometer',
    'Price': '$1,199 - $1,599',
    'Release': '2023'
  },
  'ipad air 11': {
    'Processor': 'M2',
    'CPU': '8 core',
    'GPU': '9 core',
    'Neural Engine': '16 core',
    'Storage': '128GB - 1TB',
    'Display': '11-inch Liquid Retina, LED backlit Multi-Touch display with IPS technology',
    'SDR Brightness': '500 nits max',
    'SIM Card': 'eSIM',
    'Front Camera': '12MP Landscape Ultra Wide camera',
    'Rear Camera': '12MP Wide camera',
    'Digital Zoom': 'up to 5x',
    'Video Recording': '4K video recording upto 60fps, 1080p HD video recording upto 60fps',
    'Cellular Connectivity': '5G (sub-6 GHz), Gigabit LTE, UMTS/HSPA/HSPA+/DC-HSDPA',
    'Wireless Connectivity': 'Wi-Fi 6E, MIMO, WiFi + Cellular, Bluetooth 5.3, GPS/GNSS)',
    'Sensors': 'Touch ID, Three-axis gyro, Accelerometer, Ambient light sensors, Barometer',
    'Price': '$599 - $1,099',
    'Release': '2024'
  },
  'ipad air 13': {
    'Processor': 'M2',
    'CPU': '8 core',
    'GPU': '9 core',
    'Neural Engine': '16 core',
    'Storage': '128GB - 1TB',
    'Display': '13-inch Liquid Retina, LED backlit Multi-Touch display with IPS technology',
    'SDR Brightness': '600 nits max',
    'SIM Card': 'eSIM',
    'Front Camera': '12MP Landscape Ultra Wide camera',
    'Rear Camera': '12MP Wide camera',
    'Digital Zoom': 'up to 5x',
    'Video Recording': '4K video recording upto 60fps, 1080p HD video recording upto 60fps',
    'Cellular Connectivity': '5G (sub-6 GHz), Gigabit LTE, UMTS/HSPA/HSPA+/DC-HSDPA',
    'Wireless Connectivity': 'Wi-Fi 6E, MIMO, WiFi + Cellular, Bluetooth 5.3, GPS/GNSS)',
    'Sensors': 'Touch ID, Three-axis gyro, Accelerometer, Ambient light sensors, Barometer',
    'Price': '$799 - $1,299',
    'Release': '2024'
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