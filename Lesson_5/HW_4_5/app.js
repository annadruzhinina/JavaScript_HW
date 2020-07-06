let application = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        //генерация доски
        let board = this.generateBoard();
        //добавим доску в Body
        document.body.innerHTML = board;
        //добавляем колонку с номерами строк
        this.insertRowsNumbers();
        //добавляем строку с названиями колонок
        this.insertColsChars();

    },

    /** 
    |* Метод генерирует игровое поле 8 на 8.
    |* @returns {string} html разметка в виде строки.
    */
    generateBoard() {
        let board = "";
        let rowStartWithColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = "";
            if (rowStartWithColor == 'white') {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'black';
            } else {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'white';
            }
            board += row;
        }
        return `<table>${board}</table>`;
    },
    /**
    |* Метод генерирует тэг tr (строку игровой доски) с закрашенными тэгами
    |* td (ячейки)
    |* @param {string} startWithColor с какого цвета строка начнется от левого края
    |* м. б. "white" or "black"
    |*  @param {number} rowNum номер строки от 8 до 1 так как шах-ая доска формирутеся
    |* сверху вниз, поэтому номер начинается с 8
    |* @return {string} html-разметка, тег tr с оформленными внутри тэгами td
    */
    generateRow(startWithColor, rowNum) {
        let currentColorClass = startWithColor;
        let row = "";
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = "";
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    /**
    |* Метод генерирует ячейку (тэг td) с нужным классом цвета
    |* и координатами поля
    |* @param {string} color класс цвета ячейки м. б. "white" or "black"
    |* @param {number} rowNum номер строки игровой доски 
    |* @param {string} colChar буква колонки игровой доски
    |* @return {string} html-разметка с заполнеными атрибутами координат и классом цвета
    */
    generateField(color, rowNum, colChar) {
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },
    /**
     * Метод вставляет на существующую доску колонку 
     * слева, с указанием номера строки.
     */
    insertRowsNumbers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement('td');
            td.innerText = this.config.rows[i];
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },
    /**
     * Метод создает строку (tr) с названиями колонок в виде букв,
     * а также в начале вставляет пустую ячейку, которая идет под
     * цифрами.
     */
    insertColsChars() {
        let tr = document.createElement('tr');
        tr.innerHTML += '<td></td>';
        for (let i = 0; i < this.config.cols.length; i++) {
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    },
}
application.run();
