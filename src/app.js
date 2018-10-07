import React from 'react';
import Form from './components/form';
import List from './components/list';

class App extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            list: [],
            item: {
                name: '',
                description: ''
            },
            editMode: false
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.recordAlreadyExists = this.recordAlreadyExists.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.editRecord = this.editRecord.bind(this);
        this.moveRecordUp = this.moveRecordUp.bind(this);
        this.moveRecordDown = this.moveRecordDown.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
    }
    
    // отмена редактирования записи по нажатию Escape
    cancelEdit(e) {
        if (e.keyCode === 27 && (this.state.editMode)) {
            this.setState({
                editMode: false,
                item: {
                    name: '',
                    description: ''
                }
            });
        }
    }

    // сохранение в localStorage********
    saveDataToLocalStorage() {
        localStorage.clear();
        this.state.list.map((item, n) =>
            localStorage.setItem(n, JSON.stringify(item))
        );
    }

    componentDidMount() {
        document.addEventListener('keydown', this.cancelEdit);           // отмена редактирования записи по нажатию Escape
        window.addEventListener('beforeunload', this.saveDataToLocalStorage);
        let arr = [];
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(JSON.parse(localStorage.getItem(i)));
        }
        this.setState({
            list: arr
        });
    }

    componentWillUnmount() {
        this.saveDataToLocalStorage();
        document.removeEventListener('keydown', this.cancelEdit); 
        window.removeEventListener('beforeunload', this.saveDataToLocalStorage);
    }
    // *********************************


    recordAlreadyExists(val) {
        return this.state.list.some( value => value['name'] === val );
    }

    handleInput(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const item = this.state.item;
        this.setState({
            item: {...item, [name]:value},
            editMode: true
        });
    }

    deleteRecord(record) {
        if (window.confirm(`Удалить ${this.state.list[record].name}?`)) {
            let arr = [...this.state.list];
            arr.splice(record, 1);
            this.setState({
                list: arr,
                item: {
                    name: '',
                    description: ''
                },
                editMode: false
            });
        }
    }

    editRecord(record) {
        this.setState(
            state => ({
                editMode: true,
                item: state.list[record]
            })
        );
    }

    moveRecordUp(record) {
        if (this.state.list[record - 1]) {
            let arr = [...this.state.list];
            [arr[record - 1], arr[record]] = [arr[record], arr[record - 1]];
            this.setState({
                list: arr
            });
        }
    }

    moveRecordDown(record) {
        if (this.state.list[record + 1]) {
            let arr = [...this.state.list];
            [arr[record], arr[record + 1]] = [arr[record + 1],arr[record]];
            this.setState({
                list: arr
            });
        }
    }

    markCompleted(record) {
        let arr = [...this.state.list];
        let item = arr[record];
        if (item.completed) {
            let {completed, ...rest} = item;
            arr[record] = rest;
        } else {
            arr[record] = {...item, 'completed': true};
        }
        this.setState({
            list: arr
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const item = this.state.item;
        const list = this.state.list;
        const itemName  = this.state.item.name;
        if (itemName && this.state.item.description) {
            if (this.recordAlreadyExists(itemName)) {
                let index = list.findIndex(val => {
                    return val.name === itemName
                });
                list[index] = item;
                this.setState(
                    state => ({
                        list: state.list
                    })
                );
            } else {
                this.setState(
                    state => ({
                        list: [...state.list, state.item]
                    })
                );
            }
            this.setState({
                item: {
                    name: '',
                    description: ''
                },
                editMode: false
            })
        } else {
            alert('check required field(s)!');
            return;
        }
    }

    render() {
        return (
            <div>
                <Form 
                    item={this.state.item} 
                    editMode={this.state.editMode} 
                    input={this.handleInput} 
                    submit={this.handleSubmit}
                />
                <List 
                    list={this.state.list} 
                    delete={this.deleteRecord} 
                    edit={this.editRecord}
                    up={this.moveRecordUp}
                    down={this.moveRecordDown}
                    completed={this.markCompleted}
                />
            </div>
        );
    }
}

export default App;