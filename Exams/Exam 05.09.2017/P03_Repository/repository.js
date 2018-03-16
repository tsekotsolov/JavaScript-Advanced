class Repository {
    constructor(props) {

        this.props = props;
        this.data = new Map();
        this.id = 0;
    }

    get count() {

        return [...this.data].length;

    }

    set props(value) {
        return this._props = value;
    }
    get props() {
        return this._props;
    }

    add(value) {

        this.validate(value);
        this.data.set(this.id, value);
        return this.id++;
    };

    get(id) {

        if (this.data.get(id) === undefined) {
            throw new TypeError(`Entity with id: ${id} does not exist!`)
        }

        return this.data.get(id);
    }

    update(id, newEntity) {
        if (this.data.get(id) === undefined) {
            throw new TypeError(`Entity with id: ${id} does not exist!`)
        }
        this.validate(newEntity)
        this.data.set(id, newEntity);
    }

    del(id) {
        if (this.data.get(id) === undefined) {
            throw new TypeError(`Entity with id: ${id} does not exist!`)
        }

        this.data.delete(id);

    }

    validate(value) {
        for (const key in value) {

            if (this._props.hasOwnProperty(key)) {

                if (typeof (value[key]) !== this.props[key]) {

                    throw new TypeError(`Property ${key} is of incorrect type!`)
                }
            } else {
                throw new TypeError(`Property ${key} is missing from the entity!`)
            }
        }

        
    }
}

let props = {
    color: "string",
    length: "number"
};
let repo = new Repository(props);
repo.del(5);