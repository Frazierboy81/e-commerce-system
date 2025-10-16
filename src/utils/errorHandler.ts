

export default class APIError extends Error {
    alertCode: number;


constructor(message: string, alertCode: number) {
    super(message)
this.alertCode = alertCode;
    }
}

export function handleAPIError(error: APIError) {
    if (error instanceof APIError) {
        console.error("API Error:", error.message, "Status Code:", error.alertCode);
    } else {
        console.error("An unknown error occured:", error);
    }
}
