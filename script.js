const dino = document.querySelector('.dino');
const container = document.querySelector('.container');
let position = 0;
let isJumping = false;

function handleKeyUp(event) {
   if(event.keyCode === 32) {
       if (!isJumping) {
           jump();
       }
   }
} // fim handleKeyUp()

function jump() {
    
    isJumping = true;


    let upInterval = setInterval(() => {
        if (position >= 150) {
           clearInterval(upInterval);

           //Descendo
           let downInterval = setInterval(() => {
               if (position <= 0 ) {
                   clearInterval(downInterval);
                   isJumping = false;
               } else {              
                   position -= 20
                   dino.style.bottom = position + 'px';
               }
            }, 20);
        } else {
            //Subindo
            position += 20;
            dino.style.bottom = position + 'px';
      
        }
    }, 20); 
} // fim jump()

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    container.appendChild(cactus);

    let leftInterval = setInterval(() => { 
      if (cactusPosition < -60) {
        clearInterval(leftInterval);
        container.removeChild(cactus);
      } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
          //Game over

          clearInterval(leftInterval);
          document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
      } else {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px'
      }
    }, 20);

    setTimeout(createCactus, randomTime) //gerando cactos aleatorios


} // fim createCactus()

createCactus();

document.addEventListener('keyup', handleKeyUp )