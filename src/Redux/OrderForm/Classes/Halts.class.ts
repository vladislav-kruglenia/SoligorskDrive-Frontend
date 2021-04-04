export class Halts {

    haltsArray: HaltData[] = [
        {haltLabel: "Заслонова 44", haltTime: "30"},
        {haltLabel: "Вокзал", haltTime: "37"},
        {haltLabel: "Корона", haltTime: "45"},
        {haltLabel: "Октябрьская №113", haltTime: "00"},
        {haltLabel: "Б.Шахтеров №5", haltTime: "55"},
    ];

    getHaltTime(haltLabel: string): string {
        const currentHalt = this.haltsArray.find((haltData: HaltData) => {
            return haltData.haltLabel === haltLabel
        });

        return currentHalt ? currentHalt.haltTime : this.haltsArray[0].haltTime
    }

    getHaltLabels() {
        return this.haltsArray.map((haltData: HaltData) => {
            return haltData.haltLabel
        })
    }
}

export interface HaltData {
    haltLabel: string,
    haltTime: string,
}