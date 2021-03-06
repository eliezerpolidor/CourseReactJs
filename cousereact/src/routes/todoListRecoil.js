import { useState } from 'react';

/**
 * Declare the components for the
 * state management.
 */
import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from 'recoil';
console.log("Secuencia 1");
const todoListState = atom({
    key: 'todoListState',
    default: [],
});
console.log("Secuencia 2");
const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});
console.log("Secuencia 3");
const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});
console.log("Secuencia 4");
const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get }) => {
        const list = get(todoListState);
        const values = new Map();

        values.set('total', list.length);
        values.set('total_Completed', list.filter(item => item.isComplete).length);
        values.set('total_Uncompleted', values.get('total') - values.get('total_Completed'));
        values.set('percent_Completed', (values.get('total') > 0) ? values.get('total_Completed') * 100 / values.get('total') : 0);

        return values;
    },
});
console.log("Secuencia 5");

function TodoListStats() {
    console.log("Secuencia 6");
    const todoStats = useRecoilValue(todoListStatsState);
    const arrKeys = todoStats ? [...todoStats.keys()] : null;

    return ( <
        ul > {
            arrKeys && arrKeys.map((item) => {
                let formatedStat = todoStats.get(item);
                if (item === 'percent_Completed')
                    formatedStat = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 }).format(formatedStat) + '%';

                return ( <
                    li key = { item } > { item }: { formatedStat } <
                    /li>
                );
            })
        } <
        /ul>
    );
}

function TodoListFilters() {
    console.log("Secuencia 7");
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }) => {
        setFilter(value);
    };

    return ( <
        >
        Filter: & nbsp; <
        select value = { filter }
        onChange = { updateFilter } >
        <
        option value = "Show All" > All < /option> <
        option value = "Show Completed" > Completed < /option> <
        option value = "Show Uncompleted" > Uncompleted < /option> <
        /select> <
        />
    );
}

function TodoItemCreator() {
    console.log("Secuencia 8");
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    return ( <
        div >
        <
        input type = "text"
        value = { inputValue }
        onChange = { onChange }
        /> <
        button onClick = { addItem } > Add < /button> <
        /div>
    );
}

function TodoItem({ item }) {
    console.log("Secuencia 9");
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return ( <
        div >
        <
        input type = "text"
        value = { item.text }
        onChange = { editItemText }
        /> <
        input type = "checkbox"
        checked = { item.isComplete }
        onChange = { toggleItemCompletion }
        /> <
        button onClick = { deleteItem } > X < /button> <
        /div>
    );
}

function replaceItemAtIndex(arr, index, newValue) {
    console.log("Secuencia 10");
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    console.log("Secuencia 11");
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// utility for creating unique Id
let id = 0;

function getId() {
    return id++;
}

function TodoList() {
    console.log("Secuencia 12");
    const todoList = useRecoilValue(filteredTodoListState);

    return ( <
        >
        <
        TodoListStats / >
        <
        TodoListFilters / >
        <
        TodoItemCreator / >

        {
            todoList.map((todoItem) => ( <
                TodoItem key = { todoItem.id }
                item = { todoItem }
                />
            ))
        } <
        />
    )
}

function ShowTodoList() {
    console.log("Secuencia 13");
    return ( <
        main className = "App-main" >
        <
        h2 > ToDo List < /h2> <
        h4 > [Recoil State Management] < /h4> <
        TodoList / >
        <
        /main>
    )
}

export default ShowTodoList;