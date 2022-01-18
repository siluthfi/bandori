import { useState, useEffect } from "react";

const DataBand = (value) => {
    const [band, setBand] = useState('')
    const [hash, setHash] = useState('')
    useEffect(() => {
        switch (value) {
            case "poppin-party":
                setBand("Poppin'Party")
                setHash('popipa')
                break;
                
            case "afterglow":
                setBand("Afterglow")
                setHash('afterglow')
                break;
                
            case "pastel-palletes":
                setBand("Pastel*Palletes")
                setHash('pasupare')
                break;
                
            case "roselia":
                setBand("Roselia")
                setHash('roselia')
                break;
                
            case "hello-happy-world":
                setBand("Hello Happy World")
                setHash('harohapi')
                break;
        
            default:
                break;
        }
    }, [value]);

    return { band, hash };
}
 
export default DataBand;