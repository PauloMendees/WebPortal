export default function useCardValue(){
    const getColorLabel = (label: string) => {
        if(label === "Max") return "text-alerts-green"
        if(label === "Media") return "text-primary-white"
        if(label === "Min") return "text-alerts-red"
    }

    return{getColorLabel}
}