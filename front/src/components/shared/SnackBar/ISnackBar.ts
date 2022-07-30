export interface ISnackBar {
    message: string
    severity: "error" | "warning" | "info" | "success"
    clearState?: () => void
}