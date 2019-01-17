export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString;
    this.rows = this.getMatrixInRowForm();
    this.columns = this.getMatrixInColumnForm();
  }

  getMatrixInRowForm() {
    const rowMatrix = this.matrixString.split('\n');
    return rowMatrix.map(eachRowInString => (
      eachRowInString.split(' ')
        .map(eachSingleElement => (Number(eachSingleElement)))
    ));
  }

  getMatrixInColumnForm() {
    const columnsMatrix = [];
    const lengthOfRow = this.rows.length;
    [...Array(lengthOfRow)
      .keys()]
      .forEach((columnIndex) => {
        columnsMatrix.push(this.rows.map(eachRow => eachRow[columnIndex]));
      });
    return columnsMatrix;
  }
}
