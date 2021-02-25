export async function getReportPDF() {

    const response = await fetch('/api/pdf');
    return await response.json();
}