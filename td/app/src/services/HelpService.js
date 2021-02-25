export async function getVersion() {

    const response = await fetch('/api/version');
    return await response.json();
}