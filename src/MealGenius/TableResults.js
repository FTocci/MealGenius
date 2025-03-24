import React from 'react';
import './css/TableResults.css';

const TableResults = ({ data }) => {
    if (typeof data !== 'object' || Array.isArray(data) || data === null) {
        return <div>No data available</div>;
    }

    const order = ['colazione', 'pranzo', 'spuntini', 'cena'];

    return (
        <div className="table-container">
            <table className="results-table">
                <thead>
                    <tr>
                        <th>Pasto</th>
                        <th>Alimento</th>
                        <th>Quantità</th>
                    </tr>
                </thead>
                <tbody>
                    {order
                        .filter((pasto) => data[pasto]) 
                        .map((pasto) =>
                            data[pasto].map((item, index) => (
                                <tr key={`${pasto}-${index}`}>
                                    <td>{pasto}</td>
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