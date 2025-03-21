import React from 'react';
import './css/TableResults.css'; // Importa il file CSS

const TableResults = ({ data }) => {
    if (typeof data !== 'object' || Array.isArray(data) || data === null) {
        return <div>No data available</div>;
    }

    return (
        <div className="table-container">
            <table className="results-table">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Alimento</th>
                        <th>Quantità</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([categoria, alimenti]) =>
                        alimenti.map((item, index) => (
                            <tr key={`${categoria}-${index}`}>
                                <td>{categoria}</td>
                                <td>{item.alimento}</td>
                                <td>{item.quantità}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableResults;