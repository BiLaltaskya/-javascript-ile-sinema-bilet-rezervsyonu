const container = document.querySelector('.container');
const count =document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');


getFromLocalStroge();
calculateTotal();



container.addEventListener('click',function(e) {
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
    calculateTotal()
    }
});

select.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal(){
    const selecedSeats = container.querySelectorAll('.seat.selected').length;
    
const selectedSeatsArr =[];
const seatsArr = [];



selectedSeatsArr.forEach(function (seat) {
    selectedSeatsArr.push(seat);
});

seatsArr.forEach(function(seat) {
    seatsArr.push(seat);
});

 let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);

 });



    let selectedSeatCount = selecedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    seveTolocalStorage(selectedSeatIndexs);
}

function getFromLocalStroge()  {
    const selecedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

      if (selecedSeats !=null && selecedSeats.length > 0) {
        seats.forEach(function(seat,index) {
            if(selecedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
      }


    const selecedMovieIndex =localStorage.getItem('selectedMovieIndex');

    if (selecedMovieIndex  != null )  {
        select.selecedMovieIndex = selecedMovieIndex;
    }
}

function seveTolocalStorage(indexs) {
     localStorage.setItem('selectedSeats',JSON.stringify(indexs));
     localStorage.setItem('selecedMovieIndex' ,select.selectedSeatIndex);
}