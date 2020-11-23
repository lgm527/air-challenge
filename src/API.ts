

export type PersonObject = {
    id: string;
    fullName: string;
    email: string;
    avatar: string;
    description: string;
}

export const getPeople = async (): Promise<Array<PersonObject>> => {
    try {
        const endpoint = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/090639df-57c7-4fd7-9472-67e00f8aa05f/MOCK_DATA_%282%29.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201123T140032Z&X-Amz-Expires=86400&X-Amz-Signature=ea55262d76c25b7a8f2a85ff90c36899a083dc0af052f7cf54aa4b865c7b141e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MOCK_DATA%2520%282%29.json%22"
        const data = await (await fetch(endpoint)).json()
        
    
        return data.map((person: PersonObject) => (
            
            {
                id: person.id,
                fullName: person.fullName,
                email: person.email,
                avatar: person.avatar,
                description: person.description,
            }
        ))
    } catch (error) {
        throw error;
    }
        
}