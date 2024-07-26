const niveles = ["Leyenda", "Maestro", "PRO +", "PRO", "ELITE +", "ELITE", "1A", "1B", "2A", "2B", "3A", "3B", "4A",
    "4B", "5A", "5B", "6A", "6B", "7A", "7B", "8A", "8B", "9A", "9B", "10A", "10B", "11A", "11B", "12A", "12B"];
const ventajas = [
    {
        "nombre": "Leyenda",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "PRO +",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "PRO",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "ELITE +",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "ELITE",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "1A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "1B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "2A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "2B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-17",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-18",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-19",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-20",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-21",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-22",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-23",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-24",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-25",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "Maestro",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "PRO",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "ELITE +",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "ELITE",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "1A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "1B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "2A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "2B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-17",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-18",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-19",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-20",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-21",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-22",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-23",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-24",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "PRO +",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "ELITE +",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "ELITE",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "1A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "1B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "2A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "2B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-17",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-18",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-19",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-20",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-21",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-22",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-23",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "PRO",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "ELITE",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "1A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "1B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "2A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "2B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-17",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-18",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-19",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-20",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-21",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-22",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "ELITE +",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "1A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "1B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "2A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "2B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-17",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-18",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-19",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-20",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-21",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "ELITE",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "1B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "2A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "2B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-17",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-18",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-19",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-20",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "1A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "2A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "2B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-17",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-18",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-19",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "1B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "2B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-17",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-18",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "2A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "3A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-16",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-17",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "2B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "3B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-15",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-16",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "3A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "4A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-14",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-15",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "3B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "4B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-13",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-14",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "4A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "5A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-12",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-13",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "4B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "5B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-11",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-12",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "5A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "6A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-10",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-11",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "5B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "6B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-9",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-10",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "6A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "7A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-8",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-9",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "6B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "7B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-7",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-8",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "7A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "8A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-6",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-7",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "7B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "8B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-5",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-6",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "8A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "9A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "5,-4",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-5",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "8B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "9B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "4,-4",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "5,-4",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "9A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-18",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "9B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "10A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "4,-3",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "4,-4",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "9B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-19",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-18",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "9B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "10A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "10B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "3,-3",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "4,-3",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "10A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-20",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-19",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-18",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "9B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "10A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "10B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "11A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "3,-2",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "3,-3",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "10B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-21",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-20",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-19",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-18",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "9B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "10A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "10B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "11A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "11B",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "2,-2",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "3,-2",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "11A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-22",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-21",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-20",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-19",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-18",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "9B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "10A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "10B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "11A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "11B",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "12A",
                "ventaja": "2,-1",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "2,-2",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "11B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-23",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-22",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-21",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-20",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-19",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-18",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "9B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "10A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "10B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "11A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "11B",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "12A",
                "ventaja": "1,-1",
                "daVentaja": true
            },
            {
                "nombre": "12B",
                "ventaja": "2,-1",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "12A",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-24",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-23",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-22",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-21",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-20",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-19",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-18",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "9B",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "10A",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "10B",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "11A",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "11B",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "12A",
                "ventaja": "0,0",
                "daVentaja": false
            },
            {
                "nombre": "12B",
                "ventaja": "1,-1",
                "daVentaja": true
            }
        ]
    },
    {
        "nombre": "12B",
        "ventajas": [
            {
                "nombre": "Leyenda",
                "ventaja": "5,-25",
                "daVentaja": false
            },
            {
                "nombre": "Maestro",
                "ventaja": "5,-24",
                "daVentaja": false
            },
            {
                "nombre": "PRO +",
                "ventaja": "5,-23",
                "daVentaja": false
            },
            {
                "nombre": "PRO",
                "ventaja": "5,-22",
                "daVentaja": false
            },
            {
                "nombre": "ELITE +",
                "ventaja": "5,-21",
                "daVentaja": false
            },
            {
                "nombre": "ELITE",
                "ventaja": "5,-20",
                "daVentaja": false
            },
            {
                "nombre": "1A",
                "ventaja": "5,-19",
                "daVentaja": false
            },
            {
                "nombre": "1B",
                "ventaja": "5,-18",
                "daVentaja": false
            },
            {
                "nombre": "2A",
                "ventaja": "5,-17",
                "daVentaja": false
            },
            {
                "nombre": "2B",
                "ventaja": "5,-16",
                "daVentaja": false
            },
            {
                "nombre": "3A",
                "ventaja": "5,-15",
                "daVentaja": false
            },
            {
                "nombre": "3B",
                "ventaja": "5,-14",
                "daVentaja": false
            },
            {
                "nombre": "4A",
                "ventaja": "5,-13",
                "daVentaja": false
            },
            {
                "nombre": "4B",
                "ventaja": "5,-12",
                "daVentaja": false
            },
            {
                "nombre": "5A",
                "ventaja": "5,-11",
                "daVentaja": false
            },
            {
                "nombre": "5B",
                "ventaja": "5,-10",
                "daVentaja": false
            },
            {
                "nombre": "6A",
                "ventaja": "5,-9",
                "daVentaja": false
            },
            {
                "nombre": "6B",
                "ventaja": "5,-8",
                "daVentaja": false
            },
            {
                "nombre": "7A",
                "ventaja": "5,-7",
                "daVentaja": false
            },
            {
                "nombre": "7B",
                "ventaja": "5,-6",
                "daVentaja": false
            },
            {
                "nombre": "8A",
                "ventaja": "5,-5",
                "daVentaja": false
            },
            {
                "nombre": "8B",
                "ventaja": "5,-4",
                "daVentaja": false
            },
            {
                "nombre": "9A",
                "ventaja": "4,-4",
                "daVentaja": false
            },
            {
                "nombre": "9B",
                "ventaja": "4,-3",
                "daVentaja": false
            },
            {
                "nombre": "10A",
                "ventaja": "3,-3",
                "daVentaja": false
            },
            {
                "nombre": "10B",
                "ventaja": "3,-2",
                "daVentaja": false
            },
            {
                "nombre": "11A",
                "ventaja": "2,-2",
                "daVentaja": false
            },
            {
                "nombre": "11B",
                "ventaja": "2,-1",
                "daVentaja": false
            },
            {
                "nombre": "12A",
                "ventaja": "1,-1",
                "daVentaja": false
            },
            {
                "nombre": "12B",
                "ventaja": "0,0",
                "daVentaja": false
            }
        ]
    }
];

const dataList = document.getElementById('drawlevels')

niveles.forEach(nivel => {
    const option = document.createElement('option');
    option.value = nivel;
    dataList.appendChild(option);
})

const boton = document.getElementById('verVentaja');
const miNivel = document.getElementById('miNivel');
const nivelOponente = document.getElementById('oponenteNivel');
const finalText = document.getElementById('textoFinal');

boton.addEventListener('click', () => {
    const selectedValue = miNivel.value;
    const selectedValueOponent = nivelOponente.value;

    if (!selectedValue || !selectedValueOponent) {
        finalText.textContent = `Por favor seleccione los niveles`;
    } else {
        ventajas.forEach(ventajas => {
            if (ventajas.nombre == selectedValue) {
                ventajas.ventajas.forEach(ventaja => {
                    if (ventaja.nombre == selectedValueOponent) {
                        if (ventaja.daVentaja) {
                            finalText.textContent = `Debes dar una ventaja de: ${ventaja.ventaja}`;
                        } else{
                            finalText.textContent = `Te deben dar una ventaja de: ${ventaja.ventaja}`;
                        }
                    }
                })
            }
        })
    }
})