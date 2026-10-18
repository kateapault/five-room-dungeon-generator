import { useState, useRef } from "react";
import DungeonMap from "./map";
import RoomDetails from "./roomDetails.js";
import './components.css'
import GenerateMore from "./generateMore.tsx";
import { CLUES, TREASURES, NPCS, ENEMIES } from "../constants/constants"
import jsPDF from "jspdf";
import FormattedDungeon from "./printFormat.jsx";
// import html2pdf from "html2pdf.js";


export default function Page({dungeon}) {
    const [selectedRoom, setSelectedRoom] = useState(dungeon["layout"]["entrance"])
    let e = {
        "A": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
        "B": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
        "C": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
        "D": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
        "E": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
    }
    const [extras, setExtras] = useState<object>(e)
    const [isExporting, setIsExporting] = useState(false)
    const printoutRef = useRef<HTMLDivElement>(null)

    function saveExtra(type: string, value: string) {
        let newExtras: object = {...extras}
        newExtras[selectedRoom][type] = [...newExtras[selectedRoom][type], value]
        setExtras(newExtras)
    }

    function deleteExtra(type: string, value: string) {
        let newExtras:object = {...extras}
        newExtras[selectedRoom][type] = newExtras[selectedRoom][type].filter(e => e != value)
        setExtras(newExtras)
    }

    async function downloadDungeon() {
        console.log(printoutRef.current)
        const element = printoutRef.current
        if (!element) return;

        setIsExporting(true)
        // const options = {
        //     margin: 0.5,
        //     filename: `${dungeon["title"].toLowerCase().replace(' ','_')}.pdf`,
        //     image: {type: "png" as const},
        //     html2canvas: {
        //         useCORS: true,
        //         logging: false,
        //     },
        //     jsPDF: { unit: "in", format: "letter" },
        //     pagebreak: {
        //         mode: ["css", "legacy"],
        //         avoid: ".printout-room",
        //     }
        // }

        // html2pdf().set(options).from(element).save()

        const doc = new jsPDF({
            unit: "in",
            format: [11, 8.5]
        })


        // const imgData = doc.getImageProperties(img)
        // const docWidth = doc.internal.pageSize.getWidth() - 1
        // const docHeight = (imgData.height * docWidth) / imgData.width
        // doc.addImage(img, 'PNG', 0.5, 0.5, docWidth, docHeight)
        // doc.save(`${dungeon["title"].toLowerCase().replace(' ','_')}.pdf`)
        
        await doc.html(element, {
            callback: function (pdf) {
                pdf.save(`${dungeon["title"].toLowerCase().replace(' ','_')}.pdf`);
                setIsExporting(false)
            },
            pagebreak: { mode: []},
            x: 0.5,
            y: 0.5,
            width: 7.5,
            windowWidth: 7.5*96,
            autoPaging: 'text',
            html2canvas: {
                useCORS: true,
                scrollX: 0,
                scrollY: 0,
                x: 0,
                y: 0,
                logging: false,
            },
            margin: 0.5,
        })
    }

    return (
        <div className="page">
            <div className="dungeon-title">
                <button 
                    className="btn download-btn" 
                    onClick={downloadDungeon}
                >
                    <div className="download-icon"></div>
                    {isExporting ? "Downloading..." : "Download"}
                </button>
                {dungeon["title"]}
            </div>
            <DungeonMap 
                layout={dungeon["layout"]} 
                selectedRoom={selectedRoom} 
                setSelectedRoom={setSelectedRoom}
            />
            <RoomDetails 
                contents={dungeon["rooms"][selectedRoom]}
                extras={extras[selectedRoom]}
                deleteThing={deleteExtra}
            />
            <GenerateMore 
                saveThing={saveExtra}
            />
            <FormattedDungeon 
                dungeon={dungeon}
                extras={extras}
                ref={printoutRef}
            />
        </div>
    )
}