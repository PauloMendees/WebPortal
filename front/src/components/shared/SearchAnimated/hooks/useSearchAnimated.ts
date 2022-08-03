import { useState } from "react"

export default function useSearchAnimated(){
    const [openSearch, setOpenSearch] = useState<boolean>(false)
    const [searchColor, setSearchColor] = useState<string>("#fff")

    function handleSearch(){
        setOpenSearch(!openSearch)
    }

    function handleSearchColor(value: string){
        setSearchColor(value)
    }

    return { openSearch, handleSearch, searchColor, handleSearchColor }
}