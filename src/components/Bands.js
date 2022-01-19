import { Component} from "react";
import BandEach from "./BandEach";

class Bands extends Component {
    state = {
        characters : [
            {id: 1, name: 'Kasumi Toyama', band: "Poppin'Party", role: "Vocal & Guitar", slug: "poppin-party", nameSlug: "kasumi-toyama"},
            {id: 2, name: 'Arisa Ichigaya', band: "Poppin'Party", role: "Keyboard", slug: "poppin-party", nameSlug: "arisa-ichigaya"},
            {id: 3, name: 'Tae Hanazono', band: "Poppin'Party", role: "Guitar", slug: "poppin-party", nameSlug: "tae-hanazono"},
            {id: 4, name: 'Saaya Yamabuki', band: "Poppin'Party", role: "Drum", slug: "poppin-party", nameSlug: "saaya-yamabuki"},
            {id: 5, name: 'Rimi Ushigome', band: "Poppin'Party", role: "Bass", slug: "poppin-party", nameSlug: "rimi-ushigome"},
            {id: 6, name: 'Ran Mitake', band: "Afterglow", role: "Vocal & Guitar", slug: "afterglow", nameSlug: "ran-mitake"},
            {id: 7, name: 'Tsugumi Hazawa', band: "Afterglow", role: "Keyboard", slug: "afterglow", nameSlug: "tsugumi-hazawa"},
            {id: 6, name: 'Moca Aoba', band: "Afterglow", role: "Guitar", slug: "afterglow", nameSlug: "moca-aoba"},
            {id: 9, name: 'Tomoe Udagawa', band: "Afterglow", role: "Drum", slug: "afterglow", nameSlug: "tomoe-udagawa"},
            {id: 10, name: 'Himari Uehara', band: "Afterglow", role: "Bass" , slug: "afterglow", nameSlug: "himari-uehara"},
            {id: 11, name: 'Yukina Minato', band: "Roselia", role: "Vocal", slug: "roselia", nameSlug: "yukina-minato"},
            {id: 12, name: 'Rinko Shirokane', band: "Roselia", role: "Keyboard", slug: "roselia", nameSlug: "rinko-shirokane"},
            {id: 13, name: 'Sayo Hikawa', band: "Roselia", role: "Guitar", slug: "roselia", nameSlug: "sayo-hikawa"},
            {id: 14, name: 'Ako Udagawa', band: "Roselia", role: "Drum", slug: "roselia", nameSlug: "ako-udagawa"},
            {id: 15, name: 'Lisa Imai', band: "Roselia", role: "Bass", slug: "roselia", nameSlug: "lisa-imai"},
            {id: 16, name: 'Aya Maruyama', band: "Pastel*Palletes", role: "Vocal", slug: "pastel-palletes", nameSlug: "aya-maruyama" },
            {id: 17, name: 'Eve Wakamiya', band: "Pastel*Palletes", role: "Keyboard", slug: "pastel-palletes", nameSlug: "eve-wakamiya" },
            {id: 18, name: 'Hina Hikawa', band: "Pastel*Palletes", role: "Guitar", slug: "pastel-palletes", nameSlug: "hina-hikawa" },
            {id: 19, name: 'Maya Yamato', band: "Pastel*Palletes", role: "Drum", slug: "pastel-palletes", nameSlug: "maya-yamato" },
            {id: 20, name: 'Chisato Shirasagi', band: "Pastel*Palletes", role: "Bass" , slug: "pastel-palletes", nameSlug: "chisato-shirasagi" },
            {id: 21, name: 'Kokoro Tsurumaki', band: "Hello Happy World", role: "Vocal", slug: "hello-happy-world", nameSlug: "kokoro-tsurumaki"},
            {id: 22, name: 'Misaki Okusawa', band: "Hello Happy World", role: "DJ", slug: "hello-happy-world", nameSlug: "misaki-okusawa"},
            {id: 23, name: 'Kaoru Seta', band: "Hello Happy World", role: "Guitar", slug: "hello-happy-world", nameSlug: "kaoru-seta"},
            {id: 24, name: 'Kanon Matsubara', band: "Hello Happy World", role: "Drum", slug: "hello-happy-world", nameSlug: "kanon-matsubara"},
            {id: 25, name: 'Hagumi Kitazawa', band: "Hello Happy World", role: "Bass", slug: "hello-happy-world", nameSlug: "hagumi-kitazawa"},
            {id: 26, name: 'Mashiro Kurata', band: "Morfonica", role: "Vocal"},
            {id: 27, name: 'Toko Kirigaya', band: "Morfonica", role: "Guitar"},
            {id: 28, name: 'Nanami Hiromachi', band: "Morfonica", role: "Bass" },
            {id: 29, name: 'Rui Yashio', band: "Morfonica", role: "Violin"},
            {id: 30, name: 'Futaba Tsukushi', band: "Morfonica", role: "Drum"},
            {id: 31, name: 'Rei Wakana', band: "Raise A Suilen", role: "Vocal & Bass", stageName: "LAYER"},
            {id: 32, name: 'Reona Nyubara', band: "Raise A Suilen", role: "Keyboard", stageName: "PAREO"},
            {id: 33, name: 'Rokka Asahi', band: "Raise A Suilen", role: "Guitar", stageName: "LOCK"},
            {id: 34, name: 'Satou Masuki', band: "Raise A Suilen", role: "Drum", stageName: "MASKING"},
            {id: 35, name: 'Chiyu Tamade', band: "Raise A Suilen", role: "DJ", stageName: "CHU²"},
        ]
    }

    render() {
        return (
            <div className="container-fluid">
                <BandEach characters={this.state.characters} />
            </div>
        );
    }
}
 
export default Bands;