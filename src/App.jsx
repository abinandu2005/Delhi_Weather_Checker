import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './index.css';

export default function App() {
  const [data, setData] = useState([]);
  const [dateInput, setDateInput] = useState('');
  const [timeInput, setTimeInput] = useState('');

  useEffect(() => {
    fetch('/testset.csv')
      .then(r => r.text())
      .then(text => {
        const { data } = Papa.parse(text, { header: true, skipEmptyLines: true });
        setData(data);
      });
  }, []);

  const searchKey = dateInput
    ? dateInput.replace(/-/g, '') + (timeInput ? '-' + timeInput : '')
    : '';
1
  const results = data.filter(row => {
    const dt = (row['datetime_utc'] || row[' datetime_utc'] || '').trim();
    if (!searchKey) return false;
    return timeInput ? dt === searchKey : dt.startsWith(searchKey);
  });

  return (
    <div className="container">
      <div className="header">
        <h2>🌤 Delhi Weather Checker</h2>
        <p style={{ color: '#ffffffff' }}>Search weather records by date and time</p>
      </div>

      <div className="filters">
        <label>
          Date
          <input type="date" value={dateInput} onChange={e => setDateInput(e.target.value)} />
        </label>
        <label>
          Time (optional)
          <input type="time" value={timeInput} onChange={e => setTimeInput(e.target.value)} />
        </label>
        <button onClick={() => { setDateInput(''); setTimeInput(''); }}>Clear</button>
      </div>

      {!dateInput && <p>Enter a date to see weather records.</p>}
      {dateInput && results.length === 0 && <p style={{ color: 'red' }}>No records found.</p>}
      {results.length > 0 && <p>{results.length} record(s) found</p>}

      {results.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Condition</th>
                <th>Temp (°C)</th>
                <th>Humidity (%)</th>
                <th>Pressure (hPa)</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, i) => (
                <tr key={i}>
                  <td>{(row['datetime_utc'] || row[' datetime_utc'] || '').trim()}</td>
                  <td>{row[' _conds'] || row['_conds'] || '—'}</td>
                  <td style={{ color: '#ef4444', fontWeight: 'bold' }}>{row[' _tempm'] || row['_tempm'] || '—'}</td>
                  <td>{row[' _hum'] || row['_hum'] || '—'}</td>
                  <td>{row[' _pressurem'] || row['_pressurem'] || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
