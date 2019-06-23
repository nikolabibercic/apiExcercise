fetch('https://mysafeinfo.com/api/data?list=europeanunion&format=json&abbreviate=false&case=default&token=eAbsSA6qUTQxRsHg5BvtK2M0SjGZ76cw')

.then(res => {return res.json()})

.then(
    data => {
        console.log(data);

        const container = document.querySelector('#container');

        for(i=0;i<data.length;i++){
        
            console.log(data[i].Country);

            container.innerHTML+=`
            <p id=p${i}>${data[i].Country}</p>
        `
        }


    }
)