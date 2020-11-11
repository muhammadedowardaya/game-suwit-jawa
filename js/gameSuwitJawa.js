// mengatur score------------------------------------------------------------------------------------------------------

let p = 0;
let c = 0;




function Score(player,computer){
	this.player = player;
	this.computer = computer;
}

Score.prototype.menang = function(point){
	this.player += point;
	console.log(`score player bertambah menjadi ${this.player}`);
	let player = document.querySelector('.score .hasilPlayer').innerHTML = this.player;
}

Score.prototype.kalah = function(point){
	this.computer += point;
	console.log(`score computer bertambah menjadi ${this.computer}`);
	let komputer = document.querySelector('.score .hasilKomputer').innerHTML = this.computer;
}
Score.prototype.namaPlayer = function(namaPlayer){
	this.namaPlayer = namaPlayer;
}
Score.prototype.namaComputer = function(namaComputer){
	this.namaComputer = namaComputer;
}

let nilai = new Score(0,0);

// akhir mengatur score------------------------------------------------------------------------------------------------------

// mengatur nama-------------------------------------------------------------------------------------------------------------
let tanyaPlayer = confirm('Nama PLAYER-nya mau di setting?');


let namaP = document.querySelector('.namaPlayer');
let namaK = document.querySelector('.namaKomputer');

if(tanyaPlayer === false){
	alert('Ya udah gpp');
	nilai.namaPlayer('Player');
	namaP.innerHTML = nilai.namaPlayer;
}else{
	let namaPlayer = prompt('Nama kamu siapa?');
	nilai.namaPlayer(namaPlayer); 
	namaP.innerHTML = nilai.namaPlayer;
	
}

let tanyaJKL = prompt('Apa jenis kelamin anda?\n note : \n- kalau gak tau jawab aja \'gak tau\'');

		switch(tanyaJKL) {
			case 'Perempuan' :
			case 'perempuan' :
			case 'cewe' :
			case 'Cewe' :
			case 'cewek' :
			case 'Cewek' :
			case 'wanita' :
			case 'Wanita' :
			case 'betina' :
			case 'Betina' :
			case 'akhwat' :
			case 'ciwi' :
				alert(`Hay ${nilai.namaPlayer} cantik, selamat bermain :)`);
				break;
			case 'cowo' :
			case 'Cowo' :
			case 'laki-laki' :
			case 'laki' :
			case 'Laki' :
			case 'Laki-laki' :
			case 'cowok' :
			case 'Cowok' :
			case 'Pria' :
			case 'pria' :
			case 'jantan' :
			case 'Jantan' :
				alert(`Owh berarti kasep atuh, selamat bermain ${nilai.namaPlayer} nu kasep tea kesayangan UMI > _ <`);
				break;
			case 'gak tau':
				alert(`Astaghfirullah ${nilai.namaPlayer}_- masa depan mu diragukan kecerahannya :v`);
				break;
			default :
				alert(`Kamu tuh nulis apa sih ${nilai.namaPlayer} aku gak ngerti :(`);
				break;
			}


let tanya = confirm('Ngaran komputer (lawan) na arek diganti moal?');

if(tanya === true) {
	let jawab = prompt('Sok atuh bere ngaran nu ecreug!!');
	nilai.namaComputer(jawab);
	namaK.innerHTML = nilai.namaComputer;

}
if(tanya === false){
	alert('CANCEL aja teroooossss!!!!!')
	nilai.namaComputer('Computer');
	namaK.innerHTML = nilai.namaComputer;
}



function getPilihanComputer (){
	const comp = Math.random();

	if (comp < 0.34) return 'gajahh';
	if ( comp >= 0.34 && comp < 0.67) return 'orangg';
	return 'semutt';
}



function getHasil(comp, player){

	if (player == comp) return 'SERI';
	if (player == "gajah") return (comp == "orang")? "MENANG!":"KALAH!";
	if (player == "orang") return (comp == "gajah")? "KALAH!" : "MENANG!";
	if (player == "semut") return (comp == "orang")? "KALAH!" : "MENANG!";

}



function putar(){
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajahh','semutt','orangg'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src','img/' + gambar[i++] + '.png');
		if(i == gambar.length) i = 0;
	},100);
}


const pilihan = document.querySelectorAll('ul li img');
pilihan.forEach(function(pil){

	pil.addEventListener('click',function(){



		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer,pilihanPlayer);


		console.log('comp :' + pilihanComputer);
		console.log('player :' + pilihanPlayer);
		console.log('hasil :' + hasil);


		putar();

		setTimeout(function(){
		const imgComputer = document.querySelector('.img-komputer');
		imgComputer.setAttribute('src','img/' + pilihanComputer + '.png');

		if( hasil == 'MENANG!' ) {
			nilai.menang(1);
		}else if ( hasil == 'KALAH!'){
			nilai.kalah(1);
		}else{
			nilai.menang(0);
			nilai.kalah(0);
		}


		if (nilai.player - nilai.computer === 3){
			alert(`Ciee si ${nilai.namaPlayer} meunang wae wkwk`);
		}else if(nilai.computer - nilai.player === 3 ){
			alert(`Piraku ah si ${nilai.namaPlayer} eleh wae ku si ${nilai.namaComputer} wkwk`);
		}else if(nilai.player - nilai.computer === 5){
			alert(`Bisaan amat maneh ${nilai.namaPlayer} kos oray`);
		}else if(nilai.computer - nilai.player === 5){
			alert(`hadeuhh, si ${nilai.namaPlayer} mah ngerakeun eleh wae_-`);
		}else if (nilai.player == 5 && nilai.computer == 5){
			alert(`Hmm, nampaknya ${nilai.namaPlayer} mulai kesangan....`);
		}else if (nilai.player == 8 && nilai.computer == 8){
			alert(`Hmm, nampaknya ${nilai.namaPlayer} mulai kesangan....`);
		}else if (nilai.player == 10 && nilai.computer == 10){
			alert(`Hmm, pertandingan ${nilai.namaPlayer} dengan ${nilai.namaComputer} semakin seru....`);
		}else if (nilai.player <= 2 && nilai.computer >= 4){
			alert(`Piraku wa ${nilai.namaPlayer} eleh ku ${nilai.namaComputer}_-`);
		}else if (nilai.player == 7 && nilai.computer == 7){
			alert(`uwuuuw, semangat ${nilai.namaPlayer} kuh :) `);
		}else if (nilai.player - nilai.computer == 7){
			alert(`Kayaknya ${nilai.namaPlayer} emang yang terbaik dehhh, ah jadi gemez.......... `);
		}


		const info = document.querySelector('.info');
		info.innerHTML = hasil;
		},1000);

		

		
		

		// let komputer = document.querySelector('.score .hasilKomputer');
		// let player = document.querySelector('.score .hasilPlayer');

		// komputer.innerHTML = c;
		// player.innerHTML = p;
		// else if ( hasil == 'KALAH!'){
		// 	score.kalah(1);
		// }else{
			
		// 	score.menang(0);
		// 	score.kalah(0);
			
		// }

		

		// let nilai = new score(player,computer);

		// console.log(nilai);




		// let score = function(){
		// 	let c = 0;
		// 	let p = 0;

		// 	if( hasil == 'MENANG!' ) {
		// 		return function () {
		// 			return ++p;
		// 		}
		// 	}else if ( hasil == 'KALAH!'){
		// 		return function () {
		// 			return ++c;
		// 		}
		// 	}else{
		// 		return function () {
		// 			return c = 0;
		// 			return p = 0;
		// 		}
		// 	}
			
		// }


		// let komputer = document.querySelector('.score .hasilKomputer');
		// let player = document.querySelector('.score .hasilPlayer');

		// let scoreP = score;
		// // let scoreC = score;
		// console.dir(komputer.value = scoreP);
		// console.dir(player.value = scoreC);




		// const komputer = document.querySelector('.score .hasilKomputer');
		// const player = document.querySelector('.score .hasilPlayer');

		// let scoreC = 0;
		// let scoreP = 0;
		// let score = document.querySelectorAll('ul li img');

			
			
			// const komputer = document.querySelector('.score .hasilKomputer').value = score;
			
			 //document.getElementById("gambar").style.color = blue;

		
		

		// scoreC = score(komputer);
		// scoreP = score(player);

		// komputer.innerHTML = scoreC;
		// player.innerHTML = scoreP;


		
		


		
	});
});



// const komputer = document.querySelector('.score .hasilKomputer');
// const player = document.querySelector('.score .hasilPlayer');
// komputer.addEventListener('click',function(){
// 	alert('OK');
// });
