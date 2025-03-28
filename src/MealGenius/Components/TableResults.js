import React from 'react';
import '../css/TableResults.css';

const TableResults = ({ data }) => {
    if (typeof data !== 'object' || Array.isArray(data) || data === null) {
        return <div>No data available</div>;
    }

    const order = ['Colazione', 'Pranzo', 'Spuntini', 'Cena'];

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
                            data[pasto].map((item, index) => {
                                const showPasto = index === 0; // Mostra "Pasto" solo per la prima riga
                                return (
                                    <tr key={`${pasto}-${index}`}>
                                        <td>{showPasto ? <strong>{pasto}</strong> : ''}</td>
                                        <td>{item.alimento}</td>
                                        <td>{item.quantità}</td>
                                    </tr>
                                );
                            })
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default TableResults;