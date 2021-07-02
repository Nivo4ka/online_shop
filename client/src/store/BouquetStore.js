import { makeAutoObservable } from "mobx";

export default class BouquetStore {
    constructor() {
        this._types = []
        this._flowers = []
        this._bouquets = []
        this._basket = []
        this._selectedType = {}
        this._selectedFlower = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setFlowers(flowers) {
        this._flowers = flowers
    }
    setBouquets(bouquets) {
        this._bouquets = bouquets
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedFlower(flower) {
        this.setPage(1)
        this._selectedFlower = flower
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setBasket(bouquets) {
        this._basket = bouquets
    }

    get basket() {
        return this._basket
    }
    get types() {
        return this._types
    }
    get flowers() {
        return this._flowers
    }
    get bouquets() {
        return this._bouquets
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedFlower() {
        return this._selectedFlower
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}