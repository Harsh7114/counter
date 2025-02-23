document.getElementById("increment").addEventListener("click",incrementCounter);
document.getElementById("decrement").addEventListener("click",drecrementCounter);
document.getElementById("Reset_button").addEventListener("click",resetCounter);


let CounterDisplay =document.getElementById("counterDisplay")
let CounterValue=0;

function UpdateCounterDisplay()
{
    CounterDisplay.textContent=CounterValue;
}
function incrementCounter()
{
    CounterValue++;
    UpdateCounterDisplay();
}

function drecrementCounter()
{
    if(CounterValue>0)
    {
        CounterValue--;
        UpdateCounterDisplay();
    }
}

function resetCounter()
{
    CounterValue=0;
    UpdateCounterDisplay();
}