export const fetchItems = async () => {
    // const response = await fetch(
    //     'https://script.google.com/macros/s/AKfycbxRHRo6mnlfFGA4wQzbqo8GvCLtZfIV5HmGQzXFz-JIkeh4JgTngb2dMgm1T7kWiqH0Og/exec'
    // );

    // const response = await fetch(
    //     'https://script.google.com/macros/s/AKfycbytP8l9dtcjbWZHc0lAfLAz2CLJjN7qUFXwUpaSNCXCVt1klSsZSiq-jDJ-y2ilUOWbpA/exec'
    // );

    const response = await fetch(
        'https://script.google.com/macros/s/AKfycbz5suu6ObzGV4AwOQ5GDFzaP77N7wqdg124qC7a784zL1cPERd_u1KBSiCoqjPcUMDv3Q/exec'
    );

    if (!response.ok) throw new Error('Failed to fetch items');
    return response.json();
};
