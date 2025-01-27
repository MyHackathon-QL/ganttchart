import React from 'react';
import { Chart } from 'react-google-charts';

const GanttChart = () => {
    const data = [
        [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'string', label: 'Resource' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' },
        ],
        ['1', 'Motion-U Course Planning', 'Planning', new Date(2024, 5, 1), new Date(2024, 5, 5), null, 100, null],
        ['2', 'Content Creation', 'Writing', new Date(2024, 5, 6), new Date(2024, 5, 20), null, 50, '1'],
        ['3', 'Review and Editing', 'Editing', new Date(2024, 5, 21), new Date(2024, 5, 25), null, 25, '2'],
        ['4', 'Final Approval', 'Approval', new Date(2024, 5, 26), new Date(2024, 5, 30), null, 0, '3'],
        
    ];

    const options = {
        height: 600,
        gantt: {
            criticalPathEnabled: true,
            criticalPathStyle: {
                stroke: '#e64a19',
                strokeWidth: 5,
            },
            trackHeight: 40,
        },
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1 style={{ color: 'green', textAlign: 'center' }}>Motion-U Gantt Chart</h1>
            <h3 style={{ textAlign: 'center', color: '#444' }}>Using react-google-charts</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Chart
                    chartType="Gantt"
                    width="100%"
                    height="100%"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
};

export default GanttChart;
