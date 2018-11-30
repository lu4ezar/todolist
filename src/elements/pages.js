import React from "react";
import PropTypes from "prop-types";
import { Pagination, Dropdown, GridColumn } from "semantic-ui-react";

const options = [3, 4, 5, 10, 20, "all"];

class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recordsPerPage: 4,
            pageNumber: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.getDropdownOptions = this.getDropdownOptions.bind(this);
        this.renderPagination = this.renderPagination.bind(this);
        this.renderRecsPerPage = this.renderRecsPerPage.bind(this);
    }

    componentDidMount() {
        let obj = {};
        obj = JSON.parse(localStorage.getItem("pagesState"));
        if (obj) {
            obj.recordsPerPage > this.props.list.length && obj.recordsPerPage--; // *1
            !(this.props.list.length % obj.recordsPerPage) &&
                obj.pageNumber !== 1 &&
                obj.pageNumber--; // *2
            for (const key in obj) {
                const val = obj[key];
                this.setState({
                    [key]: val
                });
            }
        }
    }

    /*
  *1 - если во время удаления записи recordsPerPage был в положении max (= arr.length), 
  то recordsPerPage уменьшается на 1 чтобы не выходить за допустимые пределы
  *2 - если удаляемая запись была на текущей странице последней,
  то (pageNumber - 1) чтобы не отображалась пустая 
  */

    componentWillUnmount() {
        localStorage.setItem("pagesState", JSON.stringify(this.state));
    }

    componentDidUpdate(prevProps) {
        if (this.props.list.length !== prevProps.list.length) {
            this.setState({
                pageNumber: 1,
                recordsPerPage: this.props.list.length
            });
        }
    }

    getDropdownOptions = options => {
        let arr = [];
        const list = this.props.list;
        for (let i = 0; i < options.length; i++) {
            let value;
            i === options.length - 1
                ? (value = list.length)
                : (value = options[i]);
            if (value < list.length || options[i] === "all") {
                arr.push({
                    key: i,
                    text: options[i].toString(),
                    value: value
                });
            }
        }
        return arr;
    };

    handleChange = data => {
        let { name, value, activePage } = data;
        activePage && (value = activePage);
        name === "recordsPerPage" &&
            this.setState({
                pageNumber: 1
            });
        this.setState({
            [name]: value
        });
    };

    renderPagination = () => {
        const totalPages = Math.ceil(
            this.props.list.length / this.state.recordsPerPage
        );
        return (
            <Pagination
                name="pageNumber"
                value={this.state.pageNumber}
                activePage={this.state.pageNumber}
                totalPages={totalPages}
                onPageChange={(e, data) => this.handleChange(data)}
            />
        );
    };

    renderRecsPerPage = () => {
        const dropdownOptions = this.getDropdownOptions(options);

        return (
            <Dropdown
                name="recordsPerPage"
                value={this.state.recordsPerPage}
                options={dropdownOptions}
                onChange={(e, data) => this.handleChange(data)}
                placeholder="Records per page"
                disabled={!this.props.list.length}
                button
            />
        );
    };

    render() {
        let list = [...this.props.list];
        const recordsPerPage = this.state.recordsPerPage;
        const pageNumber = this.state.pageNumber;
        list = list.slice(
            (pageNumber - 1) * recordsPerPage,
            pageNumber * recordsPerPage
        );

        const children = React.cloneElement(this.props.children, {
            list: list
        });
        if (!list.length) {
            return <h3>Nothing to show</h3>;
        } else {
            return (
                <React.Fragment>
                    {children}
                    {this.renderPagination()}
                    {this.renderRecsPerPage()}
                </React.Fragment>
            );
        }
    }
}

Pages.propTypes = {
    // pageNumber: PropTypes.number.isRequired,
    // recordsPerPage: PropTypes.number.isRequired,
    // listLength: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired
};

Pages.defaultProps = {
    list: []
};

export default Pages;