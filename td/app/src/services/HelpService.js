export async function getVersion() {

    const response = await fetch('/api/version');
    return await response.json();
}

export async function setVerbose(level) {
    const response = await fetch(`/api/verbose`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({verbose: level})
      })
    return await response.json();
}