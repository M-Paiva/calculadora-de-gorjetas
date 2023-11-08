function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById('bill').value;
  let ServiceQual = document.getElementById('ServiceQual').value;
  let people = document.getElementById('people').value;
  if(bill == '' | ServiceQual == 0){
    alert('Por Favor preencha os valores')
    return;
  }

  if(people == '' | people <= 1) {
    people = 1;
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }
  
  let total = (bill * ServiceQual) / people;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('TotalTips').style.display = "block";

}

    document.getElementById('TotalTips').style.display = "none";
    document.getElementById('each').style.display = "none";

    document.getElementById('TipsForm').addEventListener('submit', calculateTip);

    if(people == '' | people <= 1) {
      people = 1;
      document.getElementById('each').style.display = "none";
    } else {

    }