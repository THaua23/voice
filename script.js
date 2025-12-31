const btn = document.getElementById('voice-btn')
const mic = document.getElementById('mic')
const inputTexto = document.getElementById('voice-input')

btn.addEventListener('click', () => {
   let texto = inputTexto.value.trim()

   if (texto === '') return;

   const fala = new SpeechSynthesisUtterance(texto)

   fala.onstart = () => {
      mic.classList.add('speaking')
   }
   fala.onend = () => {
      mic.classList.remove('speaking')
   }
   fala.onerror = () => {
      mic.classList.remove('speaking')
   }

   speechSynthesis.speak(fala)
})
