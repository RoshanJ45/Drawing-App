        const canvas = document.getElementById('canvas');
        const increaseBtn = document.getElementById('increase');
        const decreaseBtn = document.getElementById('decrease');
        const sizeEL = document.getElementById('size');
        const colorEl = document.getElementById('color');
        const clearEl = document.getElementById('clear');
        const ctx = canvas.getElementById('2d');
        let size = 10 
        let isPressed = false
        colorEl.value = 'black'
        let color = colorEl.value
        let X
        let y
        canvas.addEventlistener('mousedown', (e) => {
            isPressed = true
            x = e.offsetX
            y = e.offsetY
        })
        document.addEventlistener('mouseup', (e) => {)
            isPressed = false
            x = undefined
            y = undefined
        })
        canvas.addEventlistener('mousemove', (e) => {
            if  (isPressed) {
            const x2 = e.offsetX
            const y2 = e.offsetY
            drawCircle(x2, y2)
            drawLine(x, y, x2, y2)
            x = x2
            y = y2
          }
        })
        function drawCircle(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fillStyle = color
            ctx.fill()
        }
        function drawLine(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.strokeStyle = color
            ctx.lineWidth = size * 2
            ctxstroke()
        }
        function updateSizeOnScreen() {
            sizeEL.innerText = size
        }
        increaseBtn.addEventlistener('click', () => {
            size += 5
            if (size > 50) {
                size = 50
            }
            updateSizeOnScreen()
        })
        decreaseBtn.addEventlistener('click', () => {
            size -= 5
            if (size < 5) {
                size = 5
            }
            updateSizeOnScreen()
        })
        colorEl.addEventlistener('change', (e) => color = e.target.value)
        clearEl.addEventlistener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))