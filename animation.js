
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mridulaBinary = '01001101 01110010 01101001 01100100 01110101 01101100 01100001 00100000 01010100 01101000 01110101 01101100 01100001 01110011 01101001 01110010 01100001 01101101 01100001 01101110 00001010';

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	 context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	 context.fillRect(0, 0, canvas.width, canvas.height);

     //context.clearRect(0, 0, canvas.width, canvas.height);

	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = mridulaBinary.charAt(Math.floor(Math.random() * mridulaBinary.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.7567){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 35);
