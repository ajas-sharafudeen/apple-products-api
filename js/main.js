document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
  const deviceName = document.querySelector('input').value
  try {
    const response = await fetch(`${deviceName}`)
    const data = await response.json()

    console.log(data)
    document.querySelector('h2').innerText = data
  } catch (error) {
    console.log(error)
  }
}