// @ts-check
import React from 'react';
import Form from './form';
// import List from './list';
import DumbList from '../elements/dumbList';
import Record from '../elements/record';
import Filter from '../elements/filter';
import Pages from '../elements/pages';

// import ControlPanel from '../elements/controlPanel';
import Item from '../Item';
import ModeButton from '../elements/modeButton';
// import Input from '../elements/input';

class App extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
            list: [],
            item: {},
            mode: 'list',
            recordsPerPage: 1,
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
            console.log(`starting if`);
            let data = this.getItems(12);
            console.log(`data length: ${data.length}`);

            this.setState({
                list: data
            });
        } 
        // else {console.log(`localStorage: ${localStorage.length}`);
            // console.log(`starting else`);
            // console.log(`1 list length: ${this.state.list.length}`);
        this.getDataFromLocalStorage();
            console.log(`2 list length: ${this.state.list.length}`);
        let list = [...this.state.list];
            // console.log(`2.5 list length: ${list.length}`);
            list = list.map(this.isExpired);
            // console.log(`3 list length: ${list.length}`);
        /*this.setState({
            list: list
        });*/
    // }
        document.addEventListener('keydown', this.cancelEdit);
        window.addEventListener('beforeunload', this.saveDataToLocalStorage);
    }

    componentWillUnmount() {
        this.saveDataToLocalStorage();
        document.removeEventListener('keydown', this.cancelEdit); 
        window.removeEventListener('beforeunload', this.saveDataToLocalStorage);
    }

    getDataFromLocalStorage() {
        console.log(`getting data...`);
        let arr = [];
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(JSON.parse(localStorage.getItem(i.toString())));
        }
        this.setState({
            list: arr
        });
        this.forceUpdate();
    }

    saveDataToLocalStorage() {
        localStorage.clear();
        console.log(`saving data...`);

        this.state.list.map((item, i) =>
            localStorage.setItem(i.toString(), JSON.stringify(item))
        );
    }

    handleChange(e) {
        e.preventDefault();
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

    render() {
        let element;
        const offset = this.state.pageNumber * this.state.recordsPerPage;
        const currentItemIndex = this.state.list.indexOf( this.state.item );
        switch (this.state.mode) {
            case 'list':
                element = (
                    <div className="list">
                        {this.state.list.length
                            ?  (<Filter list={this.state.list}>
                                    <Pages
                                        recordsPerPage={this.state.recordsPerPage}
                                        pageNumber={this.state.pageNumber}
                                        handleChange={this.handleChange}>
                                        <DumbList handleClick={this.handleClickListItem} offset={offset} completed={this.markCompleted} />
                                    </Pages>
                                </Filter>
                            )
                            : <h3>Your list is empty</h3>}
                    </div>
                );
                break;
            case 'form':
                element = (
                    <Form
                        item={this.state.item} 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleFormSubmit}
                    />
                );
                break;
            case 'details':
            // const item = {};
                element = (
                    <Record
                        item={this.state.item}
                        delete={() => this.deleteRecord( this.state.list.indexOf( this.state.item ) )} 
                        completed={() => this.markCompleted()}
                        edit={() => this.editRecord()}
                        addLevel={this.addLevel}
                    />
                );
                break;
            default:
                return <h1>No Mode set!</h1>;
        }

        const totalListLength = this.state.list.length;

        return (
            <React.Fragment>
                <div className="controlPanel">
                    <h3>You have {totalListLength} {totalListLength === 1 ? 'record' : 'records'}</h3>
                    {this.state.mode === 'list'
                        ? <ModeButton handleClick ={this.handleChange} name="mode" value="form" caption="Add another one" />
                        : <ModeButton handleClick ={this.handleChange} name="mode" value="list" caption=" Back to list" />
                    }
                </div>
                {element}
            </React.Fragment>
        );
    }

    handleModeButtonClick(e) {
        console.log(`tagert.type=${e.target.type} name=${e.target.name} value=${e.target.value} typeof ${typeof(e.target.value)}`);
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
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
        console.log(`isExpired is working for ${item.task}`);
        if (item.completeUntilDate) {
            const targetDate = new Date(item.completeUntilDate);
            const today = new Date(Date.now());
            if (targetDate < today) {
                item.expired = true
            } else {
               if (targetDate > today){
                   return;
               } else {
                const time = item.completeUntilTime;
                const timeNow = `${targetDate.getHours()}:${targetDate.getMinutes()}`;
                console.log(`time = ${time} timeNow = ${timeNow}`);
                    if (time < timeNow) {
                        console.log(`time < timeNow`);
                        item.expired = true;
                    }
                }
            }
        }
        return item;
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
            let recordsPerPage = this.state.recordsPerPage;
            let pageNumber = this.state.pageNumber;
            arr.splice(record, 1);

             /* если удаляемая запись была на текущей странице последней,
                то (ТекущаяСтраница - 1) чтобы не отображалась пустая */
            

            /* если во время удаления записи recordsPerPage был в положении max, 
                то recordsPerPage уменьшается на 1 чтобы не выходить за допустимые пределы */
            if (this.state.recordsPerPage > arr.length) {
                /*this.setState(
                    state => ({
                        recordsPerPage: state.recordsPerPage--
                    })
                );*/
                console.log(`recordsPerPage is too big ${recordsPerPage}`);

                recordsPerPage--;
                console.log(`recordsPerPage is too big! ${recordsPerPage}`);
            } else {
                if (!(arr.length % this.state.recordsPerPage)) {
                    console.log(`pageNumber is too big ${pageNumber}`);
                    /*this.setState(
                        state => ({
                            pageNumber: state.pageNumber--
                        })
                    );*/
                    // pageNumber = pageNumber--;
                    pageNumber--;
                    console.log(`pageNumber is too big! ${pageNumber}`);

                }
            }

            this.setState(
                state => ({
                    list: arr,
                    item: {},
                    mode: 'list',
                    pageNumber: pageNumber,
                    recordsPerPage: recordsPerPage
                })
            );
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