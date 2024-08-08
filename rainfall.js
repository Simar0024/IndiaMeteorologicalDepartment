const rainData = [];
const stateData = [];
let values = {state: '',rain: ''};

fetch('./final_output.csv')
.then(response => response.text())
.then(data => {
    const rows = data.split('\n').map(row => row.split(','));
    const header = rows[0];
    const states = rows.slice(1,38);
    const stateSelect = document.getElementById('states');
    const search_btn = document.getElementById('search');
    
    states.forEach((row) => {
        const rowStateData = row[2];
        const rowRainData = row[3];
        rainData.push(rowRainData);
        stateData.push(rowStateData);
        values.state = rowStateData;
        values.rain = rowRainData;

        Object.entries(values).forEach(()=>{
            const State = values.state; 
            const Rain = values.rain;
            const pathElement = document.getElementById(State);
            if (pathElement) {
            pathElement.setAttribute("fill", getColor(Rain));
            }
        }); 
    });

    search_btn.addEventListener('click', () => {
        let selectedState = stateSelect.value;
        selectedState = selectedState.toUpperCase();
        const resultDiv = document.getElementById('result');
        const resultDiv2 = document.getElementById('result2');
        
        if (selectedState) {
            const stateData = states.find(state => state[2] === selectedState);
            if (stateData) {
                resultDiv.textContent = `Average Rainfall in ${selectedState}: ${Math.round(stateData[3] * 100) / 100} mm/hr`;
                resultDiv2.textContent = `Maximum Rainfall in ${selectedState}: ${Math.round(stateData[4] * 100) / 100} mm/hr`;
            }
        } else {
            resultDiv.textContent = '';
            resultDiv2.textContent = '';
        }
    });
})
.catch(error => console.error('Error fetching CSV data:', error));

function getColor(rainfall) {
if (rainfall < 0.05) return "#e1eff7";
else if (rainfall > 0.05 && rainfall <= 0.5) return "lightblue";
else if (rainfall > 0.5 && rainfall <= 1.5) return "steelblue";
else return "darkblue";
}