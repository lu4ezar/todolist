/*const addLevel = function (record) {
    
}*/

export const cancelEdit = function(e) {
    if (e.keyCode === 27) {
        if (this.state.editMode) {
            this.setState({
                editMode: false
            });
        }
    }
}

export const recordAlreadyExists = function(val) {
    return this.state.list.some( value => value['task'] === val );
}

export const deleteRecord = function(record) {
    if (window.confirm(`Удалить ${this.state.list[record].task}?`)) {
        let arr = [...this.state.list];
        arr.splice(record, 1);
        this.setState({
            list: arr,
            editMode: false
        });
    }
}

export const editRecord = function(record) {
    this.setState(
        state => ({
            editMode: true,
            item: state.list[record]
        })
    );
}

export const moveRecordUp = function(record) {
    if (this.state.list[record - 1]) {
        let arr = [...this.state.list];
        [arr[record - 1], arr[record]] = [arr[record], arr[record - 1]];
        this.setState({
            list: arr
        });
    }
}

/*export function moveRecordDown(record) {
    let state = this.state;
    // console.log(`im moveRecordDown from functions.js and my this is ${this}`);
    console.log(`im moveRecordDown from functions.js and my state is ${state}`);
    /*if (this.state.list[record + 1]) {
        let arr = [...this.state.list];
        [arr[record], arr[record + 1]] = [arr[record + 1], arr[record]];
        this.setState({
            list: arr
        });
    }
}*/

export const moveRecordDown = (record => {
    // var keys = Object.keys(record);
    // let state = this.state;
    // console.log(`im moveRecordDown from functions.js and my this is ${this}`);
    for (var key in record) {
        if (record.hasOwnProperty(key)) {
            console.log(`im moveRecordDown from functions.js and my record is ${record} my keys are ${key}`);
        }
    }
    console.log(`is ${record.type} was ${record.event} and ${record.value}`);
    /*if (this.state.list[record + 1]) {
        let arr = [...this.state.list];
        [arr[record], arr[record + 1]] = [arr[record + 1], arr[record]];
        this.setState({
            list: arr
        });
    }*/
});

const markCompleted = function(record) {
    let arr = [...this.state.list];
    let item = arr[record];
    item.completed = !item.completed;
    this.setState({
        list: arr
    });
}