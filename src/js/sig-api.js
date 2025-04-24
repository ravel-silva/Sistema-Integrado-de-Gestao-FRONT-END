
export async function TeamList() {
    const response = await fetch('https://localhost:7168/Team');

    if (!response.ok) {
        throw new Error('Equipes não localizadas');
    }

    const data = await response.json();
    return data.$values ?? data;
}

