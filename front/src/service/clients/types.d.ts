export type PayloadPostClient = {
    email: string,
    rg: string,
    nome: string,
    password: string,
    createdByEmail: string,
    selfie: string,
    document: string,
    birthDate: Date | string
}

export type Client = {
    birthDate: string
    createdAt: string
    createdBy_email: string
    document: string
    email: string
    id: string
    nome: string
    password: string
    rg: string
    selfie: string
  }