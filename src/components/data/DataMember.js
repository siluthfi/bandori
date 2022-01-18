import { useState, useEffect } from "react";

const DataMember = (value) => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    useEffect(() => {
        switch (value) {
            case "kasumi-toyama":
                setName("Kasumi Toyama")
                setRole("Vocal & Guitar")
                break;
            
            case "arisa-ichigaya":
                setName("Arisa Ichigaya")
                setRole("Keyboard")
                break;
            
            case "tae-hanazono":
                setName("Tae Hanazono")
                setRole("Guitar")
                break;
            
            case "saaya-yamabuki":
                setName("Saaya Yamabuki")
                setRole("Drum")
                break;
            
            case "rimi-ushigome":
                setName("Rimi Ushigome")
                setRole("Bass")
                break;
            
            case "ran-mitake":
                setName("Ran Mitake")
                setRole("Vocal & Guitar")
                break;
            
            case "tsugumi-hazawa":
                setName("Tsugumi Hazawa")
                setRole("Keyboard")
                break;
            
            case "moca-aoba":
                setName("Moca Aoba")
                setRole("Guitar")
                break;
            
            case "tomoe-udagawa":
                setName("Tomoe Udagawa")
                setRole("Drum")
                break;
            
            case "himari-uehara":
                setName("Himari Uehara")
                setRole("Bass")
                break;
            
            case "yukina-minato":
                setName("Yukina Minato")
                setRole("Vocal")
                break;
            
            case "rinko-shirokane":
                setName("Rinko Shirokane")
                setRole("Keyboard")
                break;
            
            case "sayo-hikawa":
                setName("Sayo Hikawa")
                setRole("Guitar")
                break;
            
            case "ako-udagawa":
                setName("Ako Udagawa")
                setRole("Drum")
                break;
            
            case "lisa-imai":
                setName("Lisa Imai")
                setRole("Bass")
                break;
            
            case "aya-maruyama":
                setName("Aya Maruyama")
                setRole("Vocal")
                break;
            
            case "eve-wakamiya":
                setName("Eve Wakamiya")
                setRole("Keyboard")
                break;
            
            case "hina-hikawa":
                setName("Hina Hikawa")
                setRole("Guitar")
                break;
            
            case "maya-yamato":
                setName("Maya Yamato")
                setRole("Drum")
                break;
            
            case "chisato-shirasagi":
                setName("Chisato Shirasagi")
                setRole("Bass")
                break;
            
            case "kokoro-tsurumaki":
                setName("Kokoro Tsurumaki")
                setRole("Vocal")
                break;
            
            case "misaki-okusawa":
                setName("Misaki Okusawa")
                setRole("DJ")
                break;
            
            case "kaoru-seta":
                setName("Kaoru Seta")
                setRole("Guitar")
                break;
            
            case "kanon-matsubara":
                setName("Kanon Matsubara")
                setRole("Drum")
                break;
            
            case "hagumi-kitazawa":
                setName("Hagumi Kitazawa")
                setRole("Bass")
                break;
        
            default:
                break;
        }
    }, [value]);

    return { name, role };
}
 
export default DataMember;