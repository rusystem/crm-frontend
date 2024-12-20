import {makeAutoObservable} from "mobx";

export class TableStore {
    constructor() {
        makeAutoObservable(this)
    }
}
