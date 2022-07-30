export type StartRegisterPayload = {
    email: string
}

export type CodeVerifyPayload = {
    email: string,
    code: string
}

export type FinalizeRegisterPayload = {
    email: string,
    password: string
}