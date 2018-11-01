// @ts-check
import React from 'react';
import Form from './form';
import List from './list';
import DumbList from '../elements/dumbList';
import Record from '../elements/record';
import Filter from '../elements/filter';
import Pages from '../elements/pages';

import ControlPanel from '../elements/controlPanel';
import Item from '../Item';
import ModeButton from '../elements/modeButton';

class App extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
            list: [],
            item: {},
            mode: 'list',
            filter: false,
            filterValue: 'normal',
            recordsPerPage: 4,
            pageNumber: 0,
        };

        this.getDataFromLocalStorage = this.getDataFromLocalStorage.bind(this);
        this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.recordAlreadyExists = this.recordAlreadyExists.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.editRecord = this.editRecord.bind(this);
        this.moveRecordUp = this.moveRecordUp.bind(this);
        this.moveRecordDown = this.moveRecordDown.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
        this.addLevel = this.addLevel.bind(this);
        this.handleClickListItem = this.handleClickListItem.bind(this);
        this.handleModeButtonClick = this.handleModeButtonClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.isExpired = this.isExpired.bind(this);
    }
    
    componentDidMount() {
        if (!localStorage.length) {
            let data = this.getItems(12);
            this.setState({
                list: data
            });
        } else {
            this.getDataFromLocalStorage();
        }
        document.addEventListener('keydown', this.cancelEdit);
        window.addEventListener('beforeunload', this.saveDataToLocalStorage);
    }

    componentWillUnmount() {
        this.saveDataToLocalStorage();
        document.removeEventListener('keydown', this.cancelEdit); 
        window.removeEventListener('beforeunload', this.saveDataToLocalStorage);
    }

    getDataFromLocalStorage() {
        let arr = [];
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(JSON.parse(localStorage.getItem(i.toString())));
        }
        this.setState({
            list: arr
        });
    }

    saveDataToLocalStorage() {
        localStorage.clear();
        this.state.list.map((item, i) =>
            localStorage.setItem(i.toString(), JSON.stringify(item))
        );
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.type === 'checkbox' ? target.checked
            : ( isNaN( parseInt(target.value, 10) ) 
                ? target.value 
                : parseInt(target.value, 10));
        const item = this.state.item;
        console.log(`tagert.type=${target.type} name=${name} value=${value} typeof ${typeof(value)}`);
        if (name !== 'pageNumber') {
            this.setState({
                pageNumber: 0
            })
        }
        this.setState({
            [name]: value,
            // pageNumber: 0
        });
    }

    handleFormSubmit(obj) {
        this.setState({
                list: [...this.state.list, obj]
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const item = this.state.item;
        const list = this.state.list;
        if (item.task && this.state.item.description) {
            if (this.recordAlreadyExists(item.task)) {
                const index = list.findIndex(val => {
                    return val.task === item.task
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
                mode: 'list',
                item: {}
            });
        } else {
            alert('check required field(s)!');
            return;
        }
    }

    handleClickListItem(i) {
        // event.stopPropagation();
        console.log(`e = ${i} i = ${i}`);
        this.setState({
            item: this.state.list[i],
            mode: 'details'
        });
    }

    handleModeButtonClick(mode) {
        this.setState({
            mode: mode
        });
    }

    render() {
        const totalListLength = this.state.list.length;
        const list = [...this.state.list];
        let filteredItems = [];
        let items = list.map((item, index) => {
            return {
                index: index,
                task: item.task,
                desc: item.description,
                handleClick: () => this.handleClickListItem(index),
                priority: item.priority,
                completed: item.completed,
                isExpired: this.isExpired(item)
            };
        });
        if (this.state.filter) {
            // filteredItems = items.filter(item => item.priority === this.props.filterValue)
            items = items.filter(item => item.priority === this.state.filterValue);
            console.log(`hi im IF and i have ${items.length} elements in my list`);
        }
        const listStart = this.state.pageNumber * this.state.recordsPerPage;
		const listEnd = listStart + this.state.recordsPerPage;
		const listLength = items.length;
		const listToShow = items.slice(listStart, listEnd)
        let element;
        console.log(`hi im before-switch-line  and i have ${listLength} items to pass to Pages component`);
        switch (this.state.mode) {
            case 'list':
                element = (
                    <div className="list">
                        {this.state.list.length
                            ?  <React.Fragment>
                                    <Pages
                                        recordsPerPage={this.state.recordsPerPage}
                                        pageNumber={this.state.pageNumber}
                                        listLength={listLength}
                                        handleChange={this.handleChange} />
                                    <Filter 
                                        handleChange={this.handleChange} filter={this.state.filter} filterValue={this.state.filterValue} />
                                    <DumbList list={listToShow} />
                                </React.Fragment>
                            : <h3>Your list is empty</h3>}
                    </div>
                );
                break;
            case 'form':
                element = (
                    <div className="form">
                        <Form
                            item={this.state.item} 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleFormSubmit} />
                    </div>
                );
                break;
            case 'details':
            // const item = {};
                element = <Record
                                    item={this.state.item}
                                    delete={() => this.deleteRecord( this.state.list.indexOf( this.state.item ) )} 
                                    completed={() => this.markCompleted()}
                                    addLevel={this.addLevel}
                                />
                break;
            default:
                return <h1>No Mode set!</h1>;
        }
        return (
            <React.Fragment>
                <div className="controlPanel">
                    <h3>You have {totalListLength} {totalListLength === 1 ? 'record' : 'records'}</h3>
                    {this.state.mode === 'list'
                        ? <ModeButton handleClick ={this.handleChange} name="mode" value="form" caption="Add another one" />
                        :  <ModeButton handleClick ={this.handleChange} name="mode" value="list" caption=" Back to list" />
                    }
                    {element}
                </div>
            </React.Fragment>
        );
    }

    getItems(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            let task = 'test record ' + i;
            let desc = 'test description ' + i;
            let item = new Item(task, desc);
            arr.push(item);
        }
        return arr;
    }

    addLevel(record) {
        let arr = [...this.state.list];
        arr[record].hasChildren = true;
        arr[record].children = [];
    }

    isExpired(item) {
        if (item.completeUntilDate) {
           const date = item.completeUntilDate;
           const targetDate = new Date(date);
           const today = new Date(Date.now());
           if (targetDate.getTime() === today.getTime()) {
               const time = item.completeUntilTime;
               const timeNow = `${targetDate.getHours()}:${targetDate.getMinutes()}`;
               return time > timeNow;
           } else {
               return today > targetDate;
           }
       } else {
           return false;
       }
   }

    cancelEdit(e) {
        if (e.keyCode === 27) {
            if (this.state.editMode) {
                this.setState({
                    editMode: false
                });
            }
        }
    }

    recordAlreadyExists(val) {
        return this.state.list.some( value => value['task'] === val );
    }

    deleteRecord(record) {
        if (window.confirm(`Удалить ${this.state.list[record].task}?`)) {
            let arr = [...this.state.list];
            arr.splice(record, 1);
            /* если во время удаления записи recordsPerPage был в положении max, 
                то recordsPerPage уменьшается на 1 чтобы не выходить за допустимые пределы */
            if (this.state.recordsPerPage > arr.length) {
                this.setState(
                    state => ({
                        recordsPerPage: state.recordsPerPage--
                    })
                );
            }

            /* если удаляемая запись была на текущей странице последней,
                то (ТекущаяСтраница - 1) чтобы не отображалась пустая */
            if (!(arr.length % this.state.recordsPerPage)) {
                this.setState(
                    state => ({
                        pageNumber: state.pageNumber--
                    })
                );
            }

            this.setState({
                list: arr,
                item: {},
                mode: 'list',
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
            [arr[record], arr[record + 1]] = [arr[record + 1], arr[record]];
            this.setState({
                list: arr
            });
        }
    }

    /*markCompleted(record) {
        console.log(`event target??? ${record.target.type} val??? ${record.target.value}`);
        record.stopPropagation;
        let arr = [...this.state.list];
        let item = arr[record];
        item.completed = !item.completed;
        this.setState({
            list: arr
        });
    }*/
    markCompleted(e) {
        // e.stopPropagation();
        let arr = [...this.state.list];
        // let item = arr[e.target.value];
        let item = this.state.item;
        item.completed = !item.completed;
        this.setState({
            list: arr,
        });
    }
}

export default App;