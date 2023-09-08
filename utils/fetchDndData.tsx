import { dndApiUrl } from "@constants/endpoints";

export default async function fetchDndData(query:string){
    const result = await fetch(
        dndApiUrl,
        {
            method: "POST",
            body: JSON.stringify({
                query: query,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then((res) => res.json());

    return result.data;
}